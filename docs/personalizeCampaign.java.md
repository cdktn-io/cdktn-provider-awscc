# `personalizeCampaign` Submodule <a name="`personalizeCampaign` Submodule" id="@cdktn/provider-awscc.personalizeCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeCampaign <a name="PersonalizeCampaign" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign awscc_personalize_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaign;

PersonalizeCampaign.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .solutionVersionArn(java.lang.String)
//  .campaignConfig(PersonalizeCampaignCampaignConfig)
//  .minProvisionedTps(java.lang.Number)
//  .tags(IResolvable|java.util.List<PersonalizeCampaignTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.solutionVersionArn">solutionVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the solution version to deploy. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.campaignConfig">campaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | The configuration details of a campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.minProvisionedTps">minProvisionedTps</a></code> | <code>java.lang.Number</code> | Specifies the requested minimum provisioned transactions per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>></code> | Tags to associate with the campaign. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name PersonalizeCampaign#name}

---

##### `solutionVersionArn`<sup>Required</sup> <a name="solutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.solutionVersionArn"></a>

- *Type:* java.lang.String

The ARN of the solution version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn PersonalizeCampaign#solution_version_arn}

---

##### `campaignConfig`<sup>Optional</sup> <a name="campaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.campaignConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

The configuration details of a campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config PersonalizeCampaign#campaign_config}

---

##### `minProvisionedTps`<sup>Optional</sup> <a name="minProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.minProvisionedTps"></a>

- *Type:* java.lang.Number

Specifies the requested minimum provisioned transactions per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps PersonalizeCampaign#min_provisioned_tps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>>

Tags to associate with the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags PersonalizeCampaign#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig">putCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig">resetCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps">resetMinProvisionedTps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCampaignConfig` <a name="putCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig"></a>

```java
public void putCampaignConfig(PersonalizeCampaignCampaignConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<PersonalizeCampaignTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>>

---

##### `resetCampaignConfig` <a name="resetCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig"></a>

```java
public void resetCampaignConfig()
```

##### `resetMinProvisionedTps` <a name="resetMinProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps"></a>

```java
public void resetMinProvisionedTps()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaign;

PersonalizeCampaign.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaign;

PersonalizeCampaign.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaign;

PersonalizeCampaign.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaign;

PersonalizeCampaign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PersonalizeCampaign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PersonalizeCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PersonalizeCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn">campaignArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig">campaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime">creationDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput">campaignConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput">minProvisionedTpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput">solutionVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps">minProvisionedTps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn">solutionVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `campaignArn`<sup>Required</sup> <a name="campaignArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn"></a>

```java
public java.lang.String getCampaignArn();
```

- *Type:* java.lang.String

---

##### `campaignConfig`<sup>Required</sup> <a name="campaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig"></a>

```java
public PersonalizeCampaignCampaignConfigOutputReference getCampaignConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a>

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime"></a>

```java
public java.lang.String getCreationDateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime"></a>

```java
public java.lang.String getLastUpdatedDateTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags"></a>

```java
public PersonalizeCampaignTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a>

---

##### `campaignConfigInput`<sup>Optional</sup> <a name="campaignConfigInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput"></a>

```java
public IResolvable|PersonalizeCampaignCampaignConfig getCampaignConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `minProvisionedTpsInput`<sup>Optional</sup> <a name="minProvisionedTpsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput"></a>

```java
public java.lang.Number getMinProvisionedTpsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `solutionVersionArnInput`<sup>Optional</sup> <a name="solutionVersionArnInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput"></a>

```java
public java.lang.String getSolutionVersionArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput"></a>

```java
public IResolvable|java.util.List<PersonalizeCampaignTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>>

---

##### `minProvisionedTps`<sup>Required</sup> <a name="minProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps"></a>

```java
public java.lang.Number getMinProvisionedTps();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `solutionVersionArn`<sup>Required</sup> <a name="solutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn"></a>

```java
public java.lang.String getSolutionVersionArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeCampaignCampaignConfig <a name="PersonalizeCampaignCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaignCampaignConfig;

PersonalizeCampaignCampaignConfig.builder()
//  .enableMetadataWithRecommendations(java.lang.Boolean|IResolvable)
//  .itemExplorationConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .rankingInfluence(java.util.Map<java.lang.String, java.lang.Number>)
//  .syncWithLatestSolutionVersion(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence">rankingInfluence</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | A map of ranking influence values for POPULARITY and FRESHNESS. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion">syncWithLatestSolutionVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the campaign automatically updates to use the latest solution version. |

---

##### `enableMetadataWithRecommendations`<sup>Optional</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations"></a>

```java
public java.lang.Boolean|IResolvable getEnableMetadataWithRecommendations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether metadata with recommendations is enabled for the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#enable_metadata_with_recommendations PersonalizeCampaign#enable_metadata_with_recommendations}

---

##### `itemExplorationConfig`<sup>Optional</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getItemExplorationConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#item_exploration_config PersonalizeCampaign#item_exploration_config}

---

##### `rankingInfluence`<sup>Optional</sup> <a name="rankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getRankingInfluence();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

A map of ranking influence values for POPULARITY and FRESHNESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#ranking_influence PersonalizeCampaign#ranking_influence}

---

##### `syncWithLatestSolutionVersion`<sup>Optional</sup> <a name="syncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion"></a>

```java
public java.lang.Boolean|IResolvable getSyncWithLatestSolutionVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the campaign automatically updates to use the latest solution version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#sync_with_latest_solution_version PersonalizeCampaign#sync_with_latest_solution_version}

---

### PersonalizeCampaignConfig <a name="PersonalizeCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaignConfig;

PersonalizeCampaignConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .solutionVersionArn(java.lang.String)
//  .campaignConfig(PersonalizeCampaignCampaignConfig)
//  .minProvisionedTps(java.lang.Number)
//  .tags(IResolvable|java.util.List<PersonalizeCampaignTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn">solutionVersionArn</a></code> | <code>java.lang.String</code> | The ARN of the solution version to deploy. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig">campaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | The configuration details of a campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps">minProvisionedTps</a></code> | <code>java.lang.Number</code> | Specifies the requested minimum provisioned transactions per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>></code> | Tags to associate with the campaign. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name PersonalizeCampaign#name}

---

##### `solutionVersionArn`<sup>Required</sup> <a name="solutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn"></a>

```java
public java.lang.String getSolutionVersionArn();
```

- *Type:* java.lang.String

The ARN of the solution version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn PersonalizeCampaign#solution_version_arn}

---

##### `campaignConfig`<sup>Optional</sup> <a name="campaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig"></a>

```java
public PersonalizeCampaignCampaignConfig getCampaignConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

The configuration details of a campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config PersonalizeCampaign#campaign_config}

---

##### `minProvisionedTps`<sup>Optional</sup> <a name="minProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps"></a>

```java
public java.lang.Number getMinProvisionedTps();
```

- *Type:* java.lang.Number

Specifies the requested minimum provisioned transactions per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps PersonalizeCampaign#min_provisioned_tps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags"></a>

```java
public IResolvable|java.util.List<PersonalizeCampaignTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>>

Tags to associate with the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags PersonalizeCampaign#tags}

---

### PersonalizeCampaignTags <a name="PersonalizeCampaignTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaignTags;

PersonalizeCampaignTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#key PersonalizeCampaign#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#value PersonalizeCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeCampaignCampaignConfigOutputReference <a name="PersonalizeCampaignCampaignConfigOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaignCampaignConfigOutputReference;

new PersonalizeCampaignCampaignConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations">resetEnableMetadataWithRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig">resetItemExplorationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence">resetRankingInfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion">resetSyncWithLatestSolutionVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableMetadataWithRecommendations` <a name="resetEnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```java
public void resetEnableMetadataWithRecommendations()
```

##### `resetItemExplorationConfig` <a name="resetItemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig"></a>

```java
public void resetItemExplorationConfig()
```

##### `resetRankingInfluence` <a name="resetRankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence"></a>

```java
public void resetRankingInfluence()
```

##### `resetSyncWithLatestSolutionVersion` <a name="resetSyncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion"></a>

```java
public void resetSyncWithLatestSolutionVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput">enableMetadataWithRecommendationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput">itemExplorationConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput">rankingInfluenceInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput">syncWithLatestSolutionVersionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence">rankingInfluence</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion">syncWithLatestSolutionVersion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableMetadataWithRecommendationsInput`<sup>Optional</sup> <a name="enableMetadataWithRecommendationsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMetadataWithRecommendationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `itemExplorationConfigInput`<sup>Optional</sup> <a name="itemExplorationConfigInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getItemExplorationConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rankingInfluenceInput`<sup>Optional</sup> <a name="rankingInfluenceInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getRankingInfluenceInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `syncWithLatestSolutionVersionInput`<sup>Optional</sup> <a name="syncWithLatestSolutionVersionInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput"></a>

```java
public java.lang.Boolean|IResolvable getSyncWithLatestSolutionVersionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableMetadataWithRecommendations`<sup>Required</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```java
public java.lang.Boolean|IResolvable getEnableMetadataWithRecommendations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `itemExplorationConfig`<sup>Required</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getItemExplorationConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rankingInfluence`<sup>Required</sup> <a name="rankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getRankingInfluence();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `syncWithLatestSolutionVersion`<sup>Required</sup> <a name="syncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion"></a>

```java
public java.lang.Boolean|IResolvable getSyncWithLatestSolutionVersion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeCampaignCampaignConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---


### PersonalizeCampaignTagsList <a name="PersonalizeCampaignTagsList" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaignTagsList;

new PersonalizeCampaignTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get"></a>

```java
public PersonalizeCampaignTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PersonalizeCampaignTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>>

---


### PersonalizeCampaignTagsOutputReference <a name="PersonalizeCampaignTagsOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.personalize_campaign.PersonalizeCampaignTagsOutputReference;

new PersonalizeCampaignTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|PersonalizeCampaignTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>

---



