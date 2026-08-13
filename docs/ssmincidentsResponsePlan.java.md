# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktn/provider-awscc.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlan;

SsmincidentsResponsePlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .incidentTemplate(SsmincidentsResponsePlanIncidentTemplate)
    .name(java.lang.String)
//  .actions(IResolvable|java.util.List<SsmincidentsResponsePlanActions>)
//  .chatChannel(SsmincidentsResponsePlanChatChannel)
//  .displayName(java.lang.String)
//  .engagements(java.util.List<java.lang.String>)
//  .integrations(IResolvable|java.util.List<SsmincidentsResponsePlanIntegrations>)
//  .tags(IResolvable|java.util.List<SsmincidentsResponsePlanTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | The incident template configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>></code> | The list of actions. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.chatChannel">chatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | The chat channel configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.engagements">engagements</a></code> | <code>java.util.List<java.lang.String></code> | The list of engagements to use. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.integrations">integrations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>></code> | The list of integrations. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>></code> | The tags to apply to the response plan. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.incidentTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

The incident template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.actions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>>

The list of actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}

---

##### `chatChannel`<sup>Optional</sup> <a name="chatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.chatChannel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

The chat channel configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.engagements"></a>

- *Type:* java.util.List<java.lang.String>

The list of engagements to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.integrations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>>

The list of integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>>

The tags to apply to the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel">putChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">putIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations">putIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">resetChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">resetEngagements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations">resetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<SsmincidentsResponsePlanActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>>

---

##### `putChatChannel` <a name="putChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel"></a>

```java
public void putChatChannel(SsmincidentsResponsePlanChatChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---

##### `putIncidentTemplate` <a name="putIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```java
public void putIncidentTemplate(SsmincidentsResponsePlanIncidentTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `putIntegrations` <a name="putIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations"></a>

```java
public void putIntegrations(IResolvable|java.util.List<SsmincidentsResponsePlanIntegrations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SsmincidentsResponsePlanTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions"></a>

```java
public void resetActions()
```

##### `resetChatChannel` <a name="resetChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```java
public void resetChatChannel()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEngagements` <a name="resetEngagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```java
public void resetEngagements()
```

##### `resetIntegrations` <a name="resetIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations"></a>

```java
public void resetIntegrations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlan;

SsmincidentsResponsePlan.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlan;

SsmincidentsResponsePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlan;

SsmincidentsResponsePlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlan;

SsmincidentsResponsePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmincidentsResponsePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmincidentsResponsePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">chatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations">integrations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">chatChannelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">engagementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">incidentTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput">integrationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions"></a>

```java
public SsmincidentsResponsePlanActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `chatChannel`<sup>Required</sup> <a name="chatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```java
public SsmincidentsResponsePlanChatChannelOutputReference getChatChannel();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```java
public SsmincidentsResponsePlanIncidentTemplateOutputReference getIncidentTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations"></a>

```java
public SsmincidentsResponsePlanIntegrationsList getIntegrations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```java
public SsmincidentsResponsePlanTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>>

---

##### `chatChannelInput`<sup>Optional</sup> <a name="chatChannelInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```java
public IResolvable|SsmincidentsResponsePlanChatChannel getChatChannelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engagementsInput`<sup>Optional</sup> <a name="engagementsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```java
public java.util.List<java.lang.String> getEngagementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentTemplateInput`<sup>Optional</sup> <a name="incidentTemplateInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```java
public IResolvable|SsmincidentsResponsePlanIncidentTemplate getIncidentTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `integrationsInput`<sup>Optional</sup> <a name="integrationsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIntegrations> getIntegrationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```java
public java.util.List<java.lang.String> getEngagements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanActions <a name="SsmincidentsResponsePlanActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActions;

SsmincidentsResponsePlanActions.builder()
//  .ssmAutomation(SsmincidentsResponsePlanActionsSsmAutomation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation">ssmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | The configuration to use when starting the SSM automation document. |

---

##### `ssmAutomation`<sup>Optional</sup> <a name="ssmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomation getSsmAutomation();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

The configuration to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionsSsmAutomation <a name="SsmincidentsResponsePlanActionsSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomation;

SsmincidentsResponsePlanActionsSsmAutomation.builder()
//  .documentName(java.lang.String)
//  .documentVersion(java.lang.String)
//  .dynamicParameters(IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters>)
//  .parameters(IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationParameters>)
//  .roleArn(java.lang.String)
//  .targetAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName">documentName</a></code> | <code>java.lang.String</code> | The document name to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | The version of the document to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters">dynamicParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>></code> | The parameters with dynamic values to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>></code> | The parameters to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The role ARN to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount">targetAccount</a></code> | <code>java.lang.String</code> | The account type to use when starting the SSM automation document. |

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName"></a>

```java
public java.lang.String getDocumentName();
```

- *Type:* java.lang.String

The document name to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion"></a>

```java
public java.lang.String getDocumentVersion();
```

- *Type:* java.lang.String

The version of the document to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}

---

##### `dynamicParameters`<sup>Optional</sup> <a name="dynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters> getDynamicParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>>

The parameters with dynamic values to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>>

The parameters to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#parameters SsmincidentsResponsePlan#parameters}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The role ARN to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}

---

##### `targetAccount`<sup>Optional</sup> <a name="targetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount"></a>

```java
public java.lang.String getTargetAccount();
```

- *Type:* java.lang.String

The account type to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters;

SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.builder()
//  .key(java.lang.String)
//  .value(SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | Value of the dynamic parameter to set when starting the SSM automation document. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

Value of the dynamic parameter to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue;

SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.builder()
//  .variable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable">variable</a></code> | <code>java.lang.String</code> | The variable types used as dynamic parameter value when starting the SSM automation document. |

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

The variable types used as dynamic parameter value when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#variable SsmincidentsResponsePlan#variable}

---

### SsmincidentsResponsePlanActionsSsmAutomationParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationParameters;

SsmincidentsResponsePlanActionsSsmAutomationParameters.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanChatChannel <a name="SsmincidentsResponsePlanChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanChatChannel;

SsmincidentsResponsePlanChatChannel.builder()
//  .chatbotSns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns">chatbotSns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}. |

---

##### `chatbotSns`<sup>Optional</sup> <a name="chatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns"></a>

```java
public java.util.List<java.lang.String> getChatbotSns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanConfig;

SsmincidentsResponsePlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .incidentTemplate(SsmincidentsResponsePlanIncidentTemplate)
    .name(java.lang.String)
//  .actions(IResolvable|java.util.List<SsmincidentsResponsePlanActions>)
//  .chatChannel(SsmincidentsResponsePlanChatChannel)
//  .displayName(java.lang.String)
//  .engagements(java.util.List<java.lang.String>)
//  .integrations(IResolvable|java.util.List<SsmincidentsResponsePlanIntegrations>)
//  .tags(IResolvable|java.util.List<SsmincidentsResponsePlanTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">incidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | The incident template configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>></code> | The list of actions. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">chatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | The chat channel configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">engagements</a></code> | <code>java.util.List<java.lang.String></code> | The list of engagements to use. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations">integrations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>></code> | The list of integrations. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>></code> | The tags to apply to the response plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incidentTemplate`<sup>Required</sup> <a name="incidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```java
public SsmincidentsResponsePlanIncidentTemplate getIncidentTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

The incident template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>>

The list of actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}

---

##### `chatChannel`<sup>Optional</sup> <a name="chatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```java
public SsmincidentsResponsePlanChatChannel getChatChannel();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

The chat channel configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}

---

##### `engagements`<sup>Optional</sup> <a name="engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```java
public java.util.List<java.lang.String> getEngagements();
```

- *Type:* java.util.List<java.lang.String>

The list of engagements to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIntegrations> getIntegrations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>>

The list of integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>>

The tags to apply to the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplate;

SsmincidentsResponsePlanIncidentTemplate.builder()
    .impact(java.lang.Number)
    .title(java.lang.String)
//  .dedupeString(java.lang.String)
//  .incidentTags(IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateIncidentTags>)
//  .notificationTargets(IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateNotificationTargets>)
//  .summary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">impact</a></code> | <code>java.lang.Number</code> | The impact value. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">title</a></code> | <code>java.lang.String</code> | The title string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">dedupeString</a></code> | <code>java.lang.String</code> | The deduplication string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">incidentTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>></code> | Tags that get applied to incidents created by the StartIncident API action. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets">notificationTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>></code> | The list of notification targets. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">summary</a></code> | <code>java.lang.String</code> | The summary string. |

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```java
public java.lang.Number getImpact();
```

- *Type:* java.lang.Number

The impact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}

---

##### `dedupeString`<sup>Optional</sup> <a name="dedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```java
public java.lang.String getDedupeString();
```

- *Type:* java.lang.String

The deduplication string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}

---

##### `incidentTags`<sup>Optional</sup> <a name="incidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateIncidentTags> getIncidentTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>>

Tags that get applied to incidents created by the StartIncident API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}

---

##### `notificationTargets`<sup>Optional</sup> <a name="notificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateNotificationTargets> getNotificationTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>>

The list of notification targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#notification_targets SsmincidentsResponsePlan#notification_targets}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

The summary string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}

---

### SsmincidentsResponsePlanIncidentTemplateIncidentTags <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateIncidentTags;

SsmincidentsResponsePlanIncidentTemplateIncidentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTargets <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets;

SsmincidentsResponsePlanIncidentTemplateNotificationTargets.builder()
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | The ARN of the Chatbot SNS topic. |

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

The ARN of the Chatbot SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}

---

### SsmincidentsResponsePlanIntegrations <a name="SsmincidentsResponsePlanIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrations;

SsmincidentsResponsePlanIntegrations.builder()
//  .pagerDutyConfiguration(SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration">pagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | The pagerDuty configuration to use when starting the incident. |

---

##### `pagerDutyConfiguration`<sup>Optional</sup> <a name="pagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration"></a>

```java
public SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration getPagerDutyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

The pagerDuty configuration to use when starting the incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#pager_duty_configuration SsmincidentsResponsePlan#pager_duty_configuration}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration;

SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.builder()
//  .name(java.lang.String)
//  .pagerDutyIncidentConfiguration(SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration)
//  .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | The name of the pagerDuty configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration">pagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | The pagerDuty incident configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The AWS secrets manager secretId storing the pagerDuty token. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the pagerDuty configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `pagerDutyIncidentConfiguration`<sup>Optional</sup> <a name="pagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration"></a>

```java
public SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration getPagerDutyIncidentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

The pagerDuty incident configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration SsmincidentsResponsePlan#pager_duty_incident_configuration}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The AWS secrets manager secretId storing the pagerDuty token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration;

SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.builder()
//  .serviceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The pagerDuty serviceId. |

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The pagerDuty serviceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}

---

### SsmincidentsResponsePlanTags <a name="SsmincidentsResponsePlanTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanTags;

SsmincidentsResponsePlanTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionsList <a name="SsmincidentsResponsePlanActionsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsList;

new SsmincidentsResponsePlanActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get"></a>

```java
public SsmincidentsResponsePlanActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>>

---


### SsmincidentsResponsePlanActionsOutputReference <a name="SsmincidentsResponsePlanActionsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsOutputReference;

new SsmincidentsResponsePlanActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation">putSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation">resetSsmAutomation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsmAutomation` <a name="putSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation"></a>

```java
public void putSsmAutomation(SsmincidentsResponsePlanActionsSsmAutomation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---

##### `resetSsmAutomation` <a name="resetSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation"></a>

```java
public void resetSsmAutomation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation">ssmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput">ssmAutomationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssmAutomation`<sup>Required</sup> <a name="ssmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationOutputReference getSsmAutomation();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a>

---

##### `ssmAutomationInput`<sup>Optional</sup> <a name="ssmAutomationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput"></a>

```java
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomation getSsmAutomationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions">SsmincidentsResponsePlanActions</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue"></a>

```java
public void putValue(SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput"></a>

```java
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference;

new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariable` <a name="resetVariable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable"></a>

```java
public void resetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference;

new SsmincidentsResponsePlanActionsSsmAutomationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters">putDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName">resetDocumentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion">resetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters">resetDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount">resetTargetAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicParameters` <a name="putDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters"></a>

```java
public void putDynamicParameters(IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>>

---

##### `resetDocumentName` <a name="resetDocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName"></a>

```java
public void resetDocumentName()
```

##### `resetDocumentVersion` <a name="resetDocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion"></a>

```java
public void resetDocumentVersion()
```

##### `resetDynamicParameters` <a name="resetDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters"></a>

```java
public void resetDynamicParameters()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTargetAccount` <a name="resetTargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount"></a>

```java
public void resetTargetAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters">dynamicParameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput">documentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput">documentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput">dynamicParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput">targetAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName">documentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount">targetAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicParameters`<sup>Required</sup> <a name="dynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList getDynamicParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a>

---

##### `documentNameInput`<sup>Optional</sup> <a name="documentNameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput"></a>

```java
public java.lang.String getDocumentNameInput();
```

- *Type:* java.lang.String

---

##### `documentVersionInput`<sup>Optional</sup> <a name="documentVersionInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput"></a>

```java
public java.lang.String getDocumentVersionInput();
```

- *Type:* java.lang.String

---

##### `dynamicParametersInput`<sup>Optional</sup> <a name="dynamicParametersInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters> getDynamicParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `targetAccountInput`<sup>Optional</sup> <a name="targetAccountInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput"></a>

```java
public java.lang.String getTargetAccountInput();
```

- *Type:* java.lang.String

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName"></a>

```java
public java.lang.String getDocumentName();
```

- *Type:* java.lang.String

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion"></a>

```java
public java.lang.String getDocumentVersion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `targetAccount`<sup>Required</sup> <a name="targetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount"></a>

```java
public java.lang.String getTargetAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationParametersList;

new SsmincidentsResponsePlanActionsSsmAutomationParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get"></a>

```java
public SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanActionsSsmAutomationParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>>

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference;

new SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanActionsSsmAutomationParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters">SsmincidentsResponsePlanActionsSsmAutomationParameters</a>

---


### SsmincidentsResponsePlanChatChannelOutputReference <a name="SsmincidentsResponsePlanChatChannelOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanChatChannelOutputReference;

new SsmincidentsResponsePlanChatChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns">resetChatbotSns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChatbotSns` <a name="resetChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns"></a>

```java
public void resetChatbotSns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput">chatbotSnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns">chatbotSns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chatbotSnsInput`<sup>Optional</sup> <a name="chatbotSnsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput"></a>

```java
public java.util.List<java.lang.String> getChatbotSnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `chatbotSns`<sup>Required</sup> <a name="chatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns"></a>

```java
public java.util.List<java.lang.String> getChatbotSns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanChatChannel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsList <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList;

new SsmincidentsResponsePlanIncidentTemplateIncidentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get"></a>

```java
public SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateIncidentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>>

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference;

new SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanIncidentTemplateIncidentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList;

new SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get"></a>

```java
public SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateNotificationTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>>

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference;

new SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanIncidentTemplateNotificationTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIncidentTemplateOutputReference;

new SsmincidentsResponsePlanIncidentTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags">putIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets">putNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">resetDedupeString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">resetIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets">resetNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncidentTags` <a name="putIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags"></a>

```java
public void putIncidentTags(IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateIncidentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>>

---

##### `putNotificationTargets` <a name="putNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets"></a>

```java
public void putNotificationTargets(IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateNotificationTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>>

---

##### `resetDedupeString` <a name="resetDedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```java
public void resetDedupeString()
```

##### `resetIncidentTags` <a name="resetIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```java
public void resetIncidentTags()
```

##### `resetNotificationTargets` <a name="resetNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets"></a>

```java
public void resetNotificationTargets()
```

##### `resetSummary` <a name="resetSummary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```java
public void resetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incidentTags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets">notificationTargets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">dedupeStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">impactInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">incidentTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput">notificationTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupeString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `incidentTags`<sup>Required</sup> <a name="incidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```java
public SsmincidentsResponsePlanIncidentTemplateIncidentTagsList getIncidentTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a>

---

##### `notificationTargets`<sup>Required</sup> <a name="notificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets"></a>

```java
public SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList getNotificationTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a>

---

##### `dedupeStringInput`<sup>Optional</sup> <a name="dedupeStringInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```java
public java.lang.String getDedupeStringInput();
```

- *Type:* java.lang.String

---

##### `impactInput`<sup>Optional</sup> <a name="impactInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```java
public java.lang.Number getImpactInput();
```

- *Type:* java.lang.Number

---

##### `incidentTagsInput`<sup>Optional</sup> <a name="incidentTagsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateIncidentTags> getIncidentTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags">SsmincidentsResponsePlanIncidentTemplateIncidentTags</a>>

---

##### `notificationTargetsInput`<sup>Optional</sup> <a name="notificationTargetsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIncidentTemplateNotificationTargets> getNotificationTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets">SsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>>

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `dedupeString`<sup>Required</sup> <a name="dedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```java
public java.lang.String getDedupeString();
```

- *Type:* java.lang.String

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```java
public java.lang.Number getImpact();
```

- *Type:* java.lang.Number

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanIncidentTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---


### SsmincidentsResponsePlanIntegrationsList <a name="SsmincidentsResponsePlanIntegrationsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrationsList;

new SsmincidentsResponsePlanIntegrationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get"></a>

```java
public SsmincidentsResponsePlanIntegrationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanIntegrations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>>

---


### SsmincidentsResponsePlanIntegrationsOutputReference <a name="SsmincidentsResponsePlanIntegrationsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrationsOutputReference;

new SsmincidentsResponsePlanIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration">putPagerDutyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration">resetPagerDutyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPagerDutyConfiguration` <a name="putPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration"></a>

```java
public void putPagerDutyConfiguration(SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---

##### `resetPagerDutyConfiguration` <a name="resetPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration"></a>

```java
public void resetPagerDutyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration">pagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput">pagerDutyConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pagerDutyConfiguration`<sup>Required</sup> <a name="pagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration"></a>

```java
public SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference getPagerDutyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a>

---

##### `pagerDutyConfigurationInput`<sup>Optional</sup> <a name="pagerDutyConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput"></a>

```java
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration getPagerDutyConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanIntegrations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations">SsmincidentsResponsePlanIntegrations</a>

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference;

new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration">putPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration">resetPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPagerDutyIncidentConfiguration` <a name="putPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration"></a>

```java
public void putPagerDutyIncidentConfiguration(SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPagerDutyIncidentConfiguration` <a name="resetPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration"></a>

```java
public void resetPagerDutyIncidentConfiguration()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration">pagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput">pagerDutyIncidentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pagerDutyIncidentConfiguration`<sup>Required</sup> <a name="pagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration"></a>

```java
public SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference getPagerDutyIncidentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pagerDutyIncidentConfigurationInput`<sup>Optional</sup> <a name="pagerDutyIncidentConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput"></a>

```java
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration getPagerDutyIncidentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference;

new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId">resetServiceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceId` <a name="resetServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId"></a>

```java
public void resetServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---


### SsmincidentsResponsePlanTagsList <a name="SsmincidentsResponsePlanTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanTagsList;

new SsmincidentsResponsePlanTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get"></a>

```java
public SsmincidentsResponsePlanTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmincidentsResponsePlanTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>>

---


### SsmincidentsResponsePlanTagsOutputReference <a name="SsmincidentsResponsePlanTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmincidents_response_plan.SsmincidentsResponsePlanTagsOutputReference;

new SsmincidentsResponsePlanTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmincidentsResponsePlanTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags">SsmincidentsResponsePlanTags</a>

---



