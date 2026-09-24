# `wellarchitectedAgentProfile` Submodule <a name="`wellarchitectedAgentProfile` Submodule" id="@cdktn/provider-awscc.wellarchitectedAgentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedAgentProfile <a name="WellarchitectedAgentProfile" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile awscc_wellarchitected_agent_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfile;

WellarchitectedAgentProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aggregationConfiguration(IResolvable|java.util.List<WellarchitectedAgentProfileAggregationConfiguration>)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .pillars(java.util.List<java.lang.String>)
//  .businessOverview(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<WellarchitectedAgentProfileTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.aggregationConfiguration">aggregationConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>></code> | The aggregation configuration entries (account, regions, access role) associated with this profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role assumed to execute recommendation actions. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the profile. Unique within the account and used as the last component of the ARN. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.pillars">pillars</a></code> | <code>java.util.List<java.lang.String></code> | The list of Well-Architected pillars to focus on. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.businessOverview">businessOverview</a></code> | <code>java.lang.String</code> | A business overview for the profile used to improve recommendation quality. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether deletion protection is enabled for the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable display name of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>></code> | Key-value pairs to associate with the Agent Profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aggregationConfiguration`<sup>Required</sup> <a name="aggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.aggregationConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>>

The aggregation configuration entries (account, regions, access role) associated with this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#aggregation_configuration WellarchitectedAgentProfile#aggregation_configuration}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role assumed to execute recommendation actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#execution_role_arn WellarchitectedAgentProfile#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the profile. Unique within the account and used as the last component of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#name WellarchitectedAgentProfile#name}

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.pillars"></a>

- *Type:* java.util.List<java.lang.String>

The list of Well-Architected pillars to focus on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#pillars WellarchitectedAgentProfile#pillars}

---

##### `businessOverview`<sup>Optional</sup> <a name="businessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.businessOverview"></a>

- *Type:* java.lang.String

A business overview for the profile used to improve recommendation quality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#business_overview WellarchitectedAgentProfile#business_overview}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether deletion protection is enabled for the profile.

When enabled, the profile cannot be deleted until deletion protection is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#deletion_protection WellarchitectedAgentProfile#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#description WellarchitectedAgentProfile#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable display name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#display_name WellarchitectedAgentProfile#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>>

Key-value pairs to associate with the Agent Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#tags WellarchitectedAgentProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putAggregationConfiguration">putAggregationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetBusinessOverview">resetBusinessOverview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregationConfiguration` <a name="putAggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putAggregationConfiguration"></a>

```java
public void putAggregationConfiguration(IResolvable|java.util.List<WellarchitectedAgentProfileAggregationConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putAggregationConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WellarchitectedAgentProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>>

---

##### `resetBusinessOverview` <a name="resetBusinessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetBusinessOverview"></a>

```java
public void resetBusinessOverview()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfile;

WellarchitectedAgentProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfile;

WellarchitectedAgentProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfile;

WellarchitectedAgentProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfile;

WellarchitectedAgentProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WellarchitectedAgentProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WellarchitectedAgentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WellarchitectedAgentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedAgentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfiguration">aggregationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList">WellarchitectedAgentProfileAggregationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedBy">lastModifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList">WellarchitectedAgentProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfigurationInput">aggregationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverviewInput">businessOverviewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillarsInput">pillarsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverview">businessOverview</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillars">pillars</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aggregationConfiguration`<sup>Required</sup> <a name="aggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfiguration"></a>

```java
public WellarchitectedAgentProfileAggregationConfigurationList getAggregationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList">WellarchitectedAgentProfileAggregationConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedBy"></a>

```java
public java.lang.String getLastModifiedBy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tags"></a>

```java
public WellarchitectedAgentProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList">WellarchitectedAgentProfileTagsList</a>

---

##### `aggregationConfigurationInput`<sup>Optional</sup> <a name="aggregationConfigurationInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfigurationInput"></a>

```java
public IResolvable|java.util.List<WellarchitectedAgentProfileAggregationConfiguration> getAggregationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>>

---

##### `businessOverviewInput`<sup>Optional</sup> <a name="businessOverviewInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverviewInput"></a>

```java
public java.lang.String getBusinessOverviewInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pillarsInput`<sup>Optional</sup> <a name="pillarsInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillarsInput"></a>

```java
public java.util.List<java.lang.String> getPillarsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WellarchitectedAgentProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>>

---

##### `businessOverview`<sup>Required</sup> <a name="businessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverview"></a>

```java
public java.lang.String getBusinessOverview();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillars"></a>

```java
public java.util.List<java.lang.String> getPillars();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedAgentProfileAggregationConfiguration <a name="WellarchitectedAgentProfileAggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileAggregationConfiguration;

WellarchitectedAgentProfileAggregationConfiguration.builder()
    .accessRoleArn(java.lang.String)
    .accountId(java.lang.String)
    .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role used to access resources in this account. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The target AWS account ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The target regions in the account. |

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role used to access resources in this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#access_role_arn WellarchitectedAgentProfile#access_role_arn}

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The target AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#account_id WellarchitectedAgentProfile#account_id}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

The target regions in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#regions WellarchitectedAgentProfile#regions}

---

### WellarchitectedAgentProfileConfig <a name="WellarchitectedAgentProfileConfig" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileConfig;

WellarchitectedAgentProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aggregationConfiguration(IResolvable|java.util.List<WellarchitectedAgentProfileAggregationConfiguration>)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .pillars(java.util.List<java.lang.String>)
//  .businessOverview(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<WellarchitectedAgentProfileTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.aggregationConfiguration">aggregationConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>></code> | The aggregation configuration entries (account, regions, access role) associated with this profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role assumed to execute recommendation actions. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the profile. Unique within the account and used as the last component of the ARN. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.pillars">pillars</a></code> | <code>java.util.List<java.lang.String></code> | The list of Well-Architected pillars to focus on. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.businessOverview">businessOverview</a></code> | <code>java.lang.String</code> | A business overview for the profile used to improve recommendation quality. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether deletion protection is enabled for the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable display name of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>></code> | Key-value pairs to associate with the Agent Profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aggregationConfiguration`<sup>Required</sup> <a name="aggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.aggregationConfiguration"></a>

```java
public IResolvable|java.util.List<WellarchitectedAgentProfileAggregationConfiguration> getAggregationConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>>

The aggregation configuration entries (account, regions, access role) associated with this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#aggregation_configuration WellarchitectedAgentProfile#aggregation_configuration}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role assumed to execute recommendation actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#execution_role_arn WellarchitectedAgentProfile#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the profile. Unique within the account and used as the last component of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#name WellarchitectedAgentProfile#name}

---

##### `pillars`<sup>Required</sup> <a name="pillars" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.pillars"></a>

```java
public java.util.List<java.lang.String> getPillars();
```

- *Type:* java.util.List<java.lang.String>

The list of Well-Architected pillars to focus on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#pillars WellarchitectedAgentProfile#pillars}

---

##### `businessOverview`<sup>Optional</sup> <a name="businessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.businessOverview"></a>

```java
public java.lang.String getBusinessOverview();
```

- *Type:* java.lang.String

A business overview for the profile used to improve recommendation quality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#business_overview WellarchitectedAgentProfile#business_overview}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether deletion protection is enabled for the profile.

When enabled, the profile cannot be deleted until deletion protection is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#deletion_protection WellarchitectedAgentProfile#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#description WellarchitectedAgentProfile#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable display name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#display_name WellarchitectedAgentProfile#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WellarchitectedAgentProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>>

Key-value pairs to associate with the Agent Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#tags WellarchitectedAgentProfile#tags}

---

### WellarchitectedAgentProfileTags <a name="WellarchitectedAgentProfileTags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileTags;

WellarchitectedAgentProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#key WellarchitectedAgentProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#value WellarchitectedAgentProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedAgentProfileAggregationConfigurationList <a name="WellarchitectedAgentProfileAggregationConfigurationList" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileAggregationConfigurationList;

new WellarchitectedAgentProfileAggregationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.get"></a>

```java
public WellarchitectedAgentProfileAggregationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WellarchitectedAgentProfileAggregationConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>>

---


### WellarchitectedAgentProfileAggregationConfigurationOutputReference <a name="WellarchitectedAgentProfileAggregationConfigurationOutputReference" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileAggregationConfigurationOutputReference;

new WellarchitectedAgentProfileAggregationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArnInput">accessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRoleArnInput`<sup>Optional</sup> <a name="accessRoleArnInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArnInput"></a>

```java
public java.lang.String getAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WellarchitectedAgentProfileAggregationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration">WellarchitectedAgentProfileAggregationConfiguration</a>

---


### WellarchitectedAgentProfileTagsList <a name="WellarchitectedAgentProfileTagsList" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileTagsList;

new WellarchitectedAgentProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.get"></a>

```java
public WellarchitectedAgentProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WellarchitectedAgentProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>>

---


### WellarchitectedAgentProfileTagsOutputReference <a name="WellarchitectedAgentProfileTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_agent_profile.WellarchitectedAgentProfileTagsOutputReference;

new WellarchitectedAgentProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WellarchitectedAgentProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags">WellarchitectedAgentProfileTags</a>

---



