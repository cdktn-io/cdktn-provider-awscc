# `guarddutyFilter` Submodule <a name="`guarddutyFilter` Submodule" id="@cdktn/provider-awscc.guarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyFilter <a name="GuarddutyFilter" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter awscc_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .detectorId(java.lang.String)
    .findingCriteria(GuarddutyFilterFindingCriteria)
    .name(java.lang.String)
//  .action(java.lang.String)
//  .description(java.lang.String)
//  .rank(java.lang.Number)
//  .tags(IResolvable|java.util.List<GuarddutyFilterTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.detectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.findingCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}.

---

##### `rank`<sup>Optional</sup> <a name="rank" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.rank"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.putFindingCriteria">putFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetRank">resetRank</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFindingCriteria` <a name="putFindingCriteria" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.putFindingCriteria"></a>

```java
public void putFindingCriteria(GuarddutyFilterFindingCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GuarddutyFilterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetAction"></a>

```java
public void resetAction()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRank` <a name="resetRank" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetRank"></a>

```java
public void resetRank()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GuarddutyFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GuarddutyFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GuarddutyFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GuarddutyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList">GuarddutyFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.detectorIdInput">detectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput">findingCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.rankInput">rankInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.rank">rank</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.findingCriteria"></a>

```java
public GuarddutyFilterFindingCriteriaOutputReference getFindingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.tags"></a>

```java
public GuarddutyFilterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList">GuarddutyFilterTagsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.detectorIdInput"></a>

```java
public java.lang.String getDetectorIdInput();
```

- *Type:* java.lang.String

---

##### `findingCriteriaInput`<sup>Optional</sup> <a name="findingCriteriaInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput"></a>

```java
public IResolvable|GuarddutyFilterFindingCriteria getFindingCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.rankInput"></a>

```java
public java.lang.Number getRankInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GuarddutyFilterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyFilterConfig <a name="GuarddutyFilterConfig" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterConfig;

GuarddutyFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .detectorId(java.lang.String)
    .findingCriteria(GuarddutyFilterFindingCriteria)
    .name(java.lang.String)
//  .action(java.lang.String)
//  .description(java.lang.String)
//  .rank(java.lang.Number)
//  .tags(IResolvable|java.util.List<GuarddutyFilterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria"></a>

```java
public GuarddutyFilterFindingCriteria getFindingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}.

---

##### `rank`<sup>Optional</sup> <a name="rank" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GuarddutyFilterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}.

---

### GuarddutyFilterFindingCriteria <a name="GuarddutyFilterFindingCriteria" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterFindingCriteria;

GuarddutyFilterFindingCriteria.builder()
//  .criterion(IResolvable|java.util.Map<java.lang.String, GuarddutyFilterFindingCriteriaCriterion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion">criterion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#criterion GuarddutyFilter#criterion}. |

---

##### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion"></a>

```java
public IResolvable|java.util.Map<java.lang.String, GuarddutyFilterFindingCriteriaCriterion> getCriterion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#criterion GuarddutyFilter#criterion}.

---

### GuarddutyFilterFindingCriteriaCriterion <a name="GuarddutyFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterFindingCriteriaCriterion;

GuarddutyFilterFindingCriteriaCriterion.builder()
//  .eq(java.util.List<java.lang.String>)
//  .equalTo(java.util.List<java.lang.String>)
//  .greaterThan(java.lang.Number)
//  .greaterThanOrEqual(java.lang.Number)
//  .gt(java.lang.Number)
//  .gte(java.lang.Number)
//  .lessThan(java.lang.Number)
//  .lessThanOrEqual(java.lang.Number)
//  .lt(java.lang.Number)
//  .lte(java.lang.Number)
//  .neq(java.util.List<java.lang.String>)
//  .notEquals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.eq">eq</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#eq GuarddutyFilter#eq}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#equals GuarddutyFilter#equals}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan">greaterThan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#greater_than GuarddutyFilter#greater_than}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual">greaterThanOrEqual</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.gt">gt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#gt GuarddutyFilter#gt}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.gte">gte</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#gte GuarddutyFilter#gte}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan">lessThan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#less_than GuarddutyFilter#less_than}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual">lessThanOrEqual</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lt">lt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#lt GuarddutyFilter#lt}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lte">lte</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#lte GuarddutyFilter#lte}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.neq">neq</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#neq GuarddutyFilter#neq}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#not_equals GuarddutyFilter#not_equals}. |

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.eq"></a>

```java
public java.util.List<java.lang.String> getEq();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#eq GuarddutyFilter#eq}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#equals GuarddutyFilter#equals}.

---

##### `greaterThan`<sup>Optional</sup> <a name="greaterThan" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan"></a>

```java
public java.lang.Number getGreaterThan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#greater_than GuarddutyFilter#greater_than}.

---

##### `greaterThanOrEqual`<sup>Optional</sup> <a name="greaterThanOrEqual" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual"></a>

```java
public java.lang.Number getGreaterThanOrEqual();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}.

---

##### `gt`<sup>Optional</sup> <a name="gt" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.gt"></a>

```java
public java.lang.Number getGt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#gt GuarddutyFilter#gt}.

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.gte"></a>

```java
public java.lang.Number getGte();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#gte GuarddutyFilter#gte}.

---

##### `lessThan`<sup>Optional</sup> <a name="lessThan" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan"></a>

```java
public java.lang.Number getLessThan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#less_than GuarddutyFilter#less_than}.

---

##### `lessThanOrEqual`<sup>Optional</sup> <a name="lessThanOrEqual" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual"></a>

```java
public java.lang.Number getLessThanOrEqual();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}.

---

##### `lt`<sup>Optional</sup> <a name="lt" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lt"></a>

```java
public java.lang.Number getLt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#lt GuarddutyFilter#lt}.

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lte"></a>

```java
public java.lang.Number getLte();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#lte GuarddutyFilter#lte}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.neq"></a>

```java
public java.util.List<java.lang.String> getNeq();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#neq GuarddutyFilter#neq}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#not_equals GuarddutyFilter#not_equals}.

---

### GuarddutyFilterTags <a name="GuarddutyFilterTags" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterTags;

GuarddutyFilterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#key GuarddutyFilter#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#value GuarddutyFilter#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#key GuarddutyFilter#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_filter#value GuarddutyFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyFilterFindingCriteriaCriterionMap <a name="GuarddutyFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterFindingCriteriaCriterionMap;

new GuarddutyFilterFindingCriteriaCriterionMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.get"></a>

```java
public GuarddutyFilterFindingCriteriaCriterionOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, GuarddutyFilterFindingCriteriaCriterion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

---


### GuarddutyFilterFindingCriteriaCriterionOutputReference <a name="GuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterFindingCriteriaCriterionOutputReference;

new GuarddutyFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEq">resetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan">resetGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual">resetGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGt">resetGt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGte">resetGte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan">resetLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual">resetLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLt">resetLt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLte">resetLte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNeq">resetNeq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEq` <a name="resetEq" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```java
public void resetEq()
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetGreaterThan` <a name="resetGreaterThan" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan"></a>

```java
public void resetGreaterThan()
```

##### `resetGreaterThanOrEqual` <a name="resetGreaterThanOrEqual" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual"></a>

```java
public void resetGreaterThanOrEqual()
```

##### `resetGt` <a name="resetGt" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```java
public void resetGt()
```

##### `resetGte` <a name="resetGte" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```java
public void resetGte()
```

##### `resetLessThan` <a name="resetLessThan" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan"></a>

```java
public void resetLessThan()
```

##### `resetLessThanOrEqual` <a name="resetLessThanOrEqual" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual"></a>

```java
public void resetLessThanOrEqual()
```

##### `resetLt` <a name="resetLt" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```java
public void resetLt()
```

##### `resetLte` <a name="resetLte" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```java
public void resetLte()
```

##### `resetNeq` <a name="resetNeq" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```java
public void resetNeq()
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals"></a>

```java
public void resetNotEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.eqInput">eqInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput">equalToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput">greaterThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput">greaterThanOrEqualInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gteInput">gteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gtInput">gtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput">lessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput">lessThanOrEqualInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lteInput">lteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.ltInput">ltInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.neqInput">neqInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">greaterThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">greaterThanOrEqual</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">lessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">lessThanOrEqual</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eqInput`<sup>Optional</sup> <a name="eqInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```java
public java.util.List<java.lang.String> getEqInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput"></a>

```java
public java.util.List<java.lang.String> getEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `greaterThanInput`<sup>Optional</sup> <a name="greaterThanInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput"></a>

```java
public java.lang.Number getGreaterThanInput();
```

- *Type:* java.lang.Number

---

##### `greaterThanOrEqualInput`<sup>Optional</sup> <a name="greaterThanOrEqualInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput"></a>

```java
public java.lang.Number getGreaterThanOrEqualInput();
```

- *Type:* java.lang.Number

---

##### `gteInput`<sup>Optional</sup> <a name="gteInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```java
public java.lang.Number getGteInput();
```

- *Type:* java.lang.Number

---

##### `gtInput`<sup>Optional</sup> <a name="gtInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```java
public java.lang.Number getGtInput();
```

- *Type:* java.lang.Number

---

##### `lessThanInput`<sup>Optional</sup> <a name="lessThanInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput"></a>

```java
public java.lang.Number getLessThanInput();
```

- *Type:* java.lang.Number

---

##### `lessThanOrEqualInput`<sup>Optional</sup> <a name="lessThanOrEqualInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput"></a>

```java
public java.lang.Number getLessThanOrEqualInput();
```

- *Type:* java.lang.Number

---

##### `lteInput`<sup>Optional</sup> <a name="lteInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```java
public java.lang.Number getLteInput();
```

- *Type:* java.lang.Number

---

##### `ltInput`<sup>Optional</sup> <a name="ltInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```java
public java.lang.Number getLtInput();
```

- *Type:* java.lang.Number

---

##### `neqInput`<sup>Optional</sup> <a name="neqInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```java
public java.util.List<java.lang.String> getNeqInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput"></a>

```java
public java.util.List<java.lang.String> getNotEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```java
public java.util.List<java.lang.String> getEq();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `greaterThan`<sup>Required</sup> <a name="greaterThan" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```java
public java.lang.Number getGreaterThan();
```

- *Type:* java.lang.Number

---

##### `greaterThanOrEqual`<sup>Required</sup> <a name="greaterThanOrEqual" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```java
public java.lang.Number getGreaterThanOrEqual();
```

- *Type:* java.lang.Number

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```java
public java.lang.Number getGt();
```

- *Type:* java.lang.Number

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```java
public java.lang.Number getGte();
```

- *Type:* java.lang.Number

---

##### `lessThan`<sup>Required</sup> <a name="lessThan" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```java
public java.lang.Number getLessThan();
```

- *Type:* java.lang.Number

---

##### `lessThanOrEqual`<sup>Required</sup> <a name="lessThanOrEqual" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```java
public java.lang.Number getLessThanOrEqual();
```

- *Type:* java.lang.Number

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```java
public java.lang.Number getLt();
```

- *Type:* java.lang.Number

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```java
public java.lang.Number getLte();
```

- *Type:* java.lang.Number

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```java
public java.util.List<java.lang.String> getNeq();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyFilterFindingCriteriaCriterion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>

---


### GuarddutyFilterFindingCriteriaOutputReference <a name="GuarddutyFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterFindingCriteriaOutputReference;

new GuarddutyFilterFindingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion">putCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resetCriterion">resetCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriterion` <a name="putCriterion" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion"></a>

```java
public void putCriterion(IResolvable|java.util.Map<java.lang.String, GuarddutyFilterFindingCriteriaCriterion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

---

##### `resetCriterion` <a name="resetCriterion" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resetCriterion"></a>

```java
public void resetCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap">GuarddutyFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput">criterionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```java
public GuarddutyFilterFindingCriteriaCriterionMap getCriterion();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionMap">GuarddutyFilterFindingCriteriaCriterionMap</a>

---

##### `criterionInput`<sup>Optional</sup> <a name="criterionInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, GuarddutyFilterFindingCriteriaCriterion> getCriterionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyFilterFindingCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---


### GuarddutyFilterTagsList <a name="GuarddutyFilterTagsList" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterTagsList;

new GuarddutyFilterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.get"></a>

```java
public GuarddutyFilterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GuarddutyFilterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>>

---


### GuarddutyFilterTagsOutputReference <a name="GuarddutyFilterTagsOutputReference" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_filter.GuarddutyFilterTagsOutputReference;

new GuarddutyFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyFilterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyFilter.GuarddutyFilterTags">GuarddutyFilterTags</a>

---



