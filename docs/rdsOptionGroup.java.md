# `rdsOptionGroup` Submodule <a name="`rdsOptionGroup` Submodule" id="@cdktn/provider-awscc.rdsOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsOptionGroup <a name="RdsOptionGroup" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group awscc_rds_option_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroup;

RdsOptionGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineName(java.lang.String)
    .majorEngineVersion(java.lang.String)
    .optionGroupDescription(java.lang.String)
//  .optionConfigurations(IResolvable|java.util.List<RdsOptionGroupOptionConfigurations>)
//  .optionGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsOptionGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.engineName">engineName</a></code> | <code>java.lang.String</code> | Specifies the name of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | Specifies the major version of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupDescription">optionGroupDescription</a></code> | <code>java.lang.String</code> | The description of the option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionConfigurations">optionConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>></code> | A list of all available options for an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | The name of the option group to be created. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>></code> | Tags to assign to the option group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.engineName"></a>

- *Type:* java.lang.String

Specifies the name of the engine that this option group should be associated with.

Valid Values:

* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#engine_name RdsOptionGroup#engine_name}

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.majorEngineVersion"></a>

- *Type:* java.lang.String

Specifies the major version of the engine that this option group should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#major_engine_version RdsOptionGroup#major_engine_version}

---

##### `optionGroupDescription`<sup>Required</sup> <a name="optionGroupDescription" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupDescription"></a>

- *Type:* java.lang.String

The description of the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_group_description RdsOptionGroup#option_group_description}

---

##### `optionConfigurations`<sup>Optional</sup> <a name="optionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>>

A list of all available options for an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_configurations RdsOptionGroup#option_configurations}

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupName"></a>

- *Type:* java.lang.String

The name of the option group to be created.

Constraints:

* Must be 1 to 255 letters, numbers, or hyphens
* First character must be a letter
* Can't end with a hyphen or contain two consecutive hyphens

Example: `myoptiongroup`
If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_group_name RdsOptionGroup#option_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>>

Tags to assign to the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#tags RdsOptionGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations">putOptionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionConfigurations">resetOptionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionGroupName">resetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptionConfigurations` <a name="putOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations"></a>

```java
public void putOptionConfigurations(IResolvable|java.util.List<RdsOptionGroupOptionConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsOptionGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>>

---

##### `resetOptionConfigurations` <a name="resetOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionConfigurations"></a>

```java
public void resetOptionConfigurations()
```

##### `resetOptionGroupName` <a name="resetOptionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionGroupName"></a>

```java
public void resetOptionGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroup;

RdsOptionGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroup;

RdsOptionGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroup;

RdsOptionGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroup;

RdsOptionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsOptionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsOptionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsOptionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsOptionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurations">optionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList">RdsOptionGroupOptionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList">RdsOptionGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineNameInput">engineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersionInput">majorEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurationsInput">optionConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescriptionInput">optionGroupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupNameInput">optionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineName">engineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescription">optionGroupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optionConfigurations`<sup>Required</sup> <a name="optionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurations"></a>

```java
public RdsOptionGroupOptionConfigurationsList getOptionConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList">RdsOptionGroupOptionConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tags"></a>

```java
public RdsOptionGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList">RdsOptionGroupTagsList</a>

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineNameInput"></a>

```java
public java.lang.String getEngineNameInput();
```

- *Type:* java.lang.String

---

##### `majorEngineVersionInput`<sup>Optional</sup> <a name="majorEngineVersionInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersionInput"></a>

```java
public java.lang.String getMajorEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `optionConfigurationsInput`<sup>Optional</sup> <a name="optionConfigurationsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurationsInput"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupOptionConfigurations> getOptionConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>>

---

##### `optionGroupDescriptionInput`<sup>Optional</sup> <a name="optionGroupDescriptionInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescriptionInput"></a>

```java
public java.lang.String getOptionGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `optionGroupNameInput`<sup>Optional</sup> <a name="optionGroupNameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupNameInput"></a>

```java
public java.lang.String getOptionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>>

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

---

##### `optionGroupDescription`<sup>Required</sup> <a name="optionGroupDescription" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescription"></a>

```java
public java.lang.String getOptionGroupDescription();
```

- *Type:* java.lang.String

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsOptionGroupConfig <a name="RdsOptionGroupConfig" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupConfig;

RdsOptionGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineName(java.lang.String)
    .majorEngineVersion(java.lang.String)
    .optionGroupDescription(java.lang.String)
//  .optionConfigurations(IResolvable|java.util.List<RdsOptionGroupOptionConfigurations>)
//  .optionGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsOptionGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.engineName">engineName</a></code> | <code>java.lang.String</code> | Specifies the name of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | Specifies the major version of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupDescription">optionGroupDescription</a></code> | <code>java.lang.String</code> | The description of the option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionConfigurations">optionConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>></code> | A list of all available options for an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | The name of the option group to be created. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>></code> | Tags to assign to the option group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

Specifies the name of the engine that this option group should be associated with.

Valid Values:

* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#engine_name RdsOptionGroup#engine_name}

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

Specifies the major version of the engine that this option group should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#major_engine_version RdsOptionGroup#major_engine_version}

---

##### `optionGroupDescription`<sup>Required</sup> <a name="optionGroupDescription" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupDescription"></a>

```java
public java.lang.String getOptionGroupDescription();
```

- *Type:* java.lang.String

The description of the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_group_description RdsOptionGroup#option_group_description}

---

##### `optionConfigurations`<sup>Optional</sup> <a name="optionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionConfigurations"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupOptionConfigurations> getOptionConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>>

A list of all available options for an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_configurations RdsOptionGroup#option_configurations}

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

The name of the option group to be created.

Constraints:

* Must be 1 to 255 letters, numbers, or hyphens
* First character must be a letter
* Can't end with a hyphen or contain two consecutive hyphens

Example: `myoptiongroup`
If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_group_name RdsOptionGroup#option_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>>

Tags to assign to the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#tags RdsOptionGroup#tags}

---

### RdsOptionGroupOptionConfigurations <a name="RdsOptionGroupOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupOptionConfigurations;

RdsOptionGroupOptionConfigurations.builder()
//  .dbSecurityGroupMemberships(java.util.List<java.lang.String>)
//  .optionName(java.lang.String)
//  .optionSettings(IResolvable|java.util.List<RdsOptionGroupOptionConfigurationsOptionSettings>)
//  .optionVersion(java.lang.String)
//  .port(java.lang.Number)
//  .vpcSecurityGroupMemberships(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.dbSecurityGroupMemberships">dbSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | A list of DB security groups used for this option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionName">optionName</a></code> | <code>java.lang.String</code> | The configuration of options to include in a group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionSettings">optionSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>></code> | The option settings to include in an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionVersion">optionVersion</a></code> | <code>java.lang.String</code> | The version for the option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.port">port</a></code> | <code>java.lang.Number</code> | The optional port for the option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.vpcSecurityGroupMemberships">vpcSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC security group names used for this option. |

---

##### `dbSecurityGroupMemberships`<sup>Optional</sup> <a name="dbSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.dbSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

A list of DB security groups used for this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#db_security_group_memberships RdsOptionGroup#db_security_group_memberships}

---

##### `optionName`<sup>Optional</sup> <a name="optionName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

The configuration of options to include in a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_name RdsOptionGroup#option_name}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionSettings"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupOptionConfigurationsOptionSettings> getOptionSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>>

The option settings to include in an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_settings RdsOptionGroup#option_settings}

---

##### `optionVersion`<sup>Optional</sup> <a name="optionVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionVersion"></a>

```java
public java.lang.String getOptionVersion();
```

- *Type:* java.lang.String

The version for the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#option_version RdsOptionGroup#option_version}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The optional port for the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#port RdsOptionGroup#port}

---

##### `vpcSecurityGroupMemberships`<sup>Optional</sup> <a name="vpcSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.vpcSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

A list of VPC security group names used for this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#vpc_security_group_memberships RdsOptionGroup#vpc_security_group_memberships}

---

### RdsOptionGroupOptionConfigurationsOptionSettings <a name="RdsOptionGroupOptionConfigurationsOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupOptionConfigurationsOptionSettings;

RdsOptionGroupOptionConfigurationsOptionSettings.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.name">name</a></code> | <code>java.lang.String</code> | The name of the option that has settings that you can set. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.value">value</a></code> | <code>java.lang.String</code> | The current value of the option setting. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the option that has settings that you can set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#name RdsOptionGroup#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The current value of the option setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#value RdsOptionGroup#value}

---

### RdsOptionGroupTags <a name="RdsOptionGroupTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupTags;

RdsOptionGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#key RdsOptionGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_option_group#value RdsOptionGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsOptionGroupOptionConfigurationsList <a name="RdsOptionGroupOptionConfigurationsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupOptionConfigurationsList;

new RdsOptionGroupOptionConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get"></a>

```java
public RdsOptionGroupOptionConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupOptionConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>>

---


### RdsOptionGroupOptionConfigurationsOptionSettingsList <a name="RdsOptionGroupOptionConfigurationsOptionSettingsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupOptionConfigurationsOptionSettingsList;

new RdsOptionGroupOptionConfigurationsOptionSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get"></a>

```java
public RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupOptionConfigurationsOptionSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>>

---


### RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference <a name="RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference;

new RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>

---


### RdsOptionGroupOptionConfigurationsOutputReference <a name="RdsOptionGroupOptionConfigurationsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupOptionConfigurationsOutputReference;

new RdsOptionGroupOptionConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetDbSecurityGroupMemberships">resetDbSecurityGroupMemberships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionName">resetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionVersion">resetOptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetVpcSecurityGroupMemberships">resetVpcSecurityGroupMemberships</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings"></a>

```java
public void putOptionSettings(IResolvable|java.util.List<RdsOptionGroupOptionConfigurationsOptionSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>>

---

##### `resetDbSecurityGroupMemberships` <a name="resetDbSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetDbSecurityGroupMemberships"></a>

```java
public void resetDbSecurityGroupMemberships()
```

##### `resetOptionName` <a name="resetOptionName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionName"></a>

```java
public void resetOptionName()
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionSettings"></a>

```java
public void resetOptionSettings()
```

##### `resetOptionVersion` <a name="resetOptionVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionVersion"></a>

```java
public void resetOptionVersion()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetVpcSecurityGroupMemberships` <a name="resetVpcSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetVpcSecurityGroupMemberships"></a>

```java
public void resetVpcSecurityGroupMemberships()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList">RdsOptionGroupOptionConfigurationsOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMembershipsInput">dbSecurityGroupMembershipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettingsInput">optionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersionInput">optionVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMembershipsInput">vpcSecurityGroupMembershipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMemberships">dbSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionName">optionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersion">optionVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMemberships">vpcSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettings"></a>

```java
public RdsOptionGroupOptionConfigurationsOptionSettingsList getOptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList">RdsOptionGroupOptionConfigurationsOptionSettingsList</a>

---

##### `dbSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="dbSecurityGroupMembershipsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupMembershipsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionNameInput"></a>

```java
public java.lang.String getOptionNameInput();
```

- *Type:* java.lang.String

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettingsInput"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupOptionConfigurationsOptionSettings> getOptionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>>

---

##### `optionVersionInput`<sup>Optional</sup> <a name="optionVersionInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersionInput"></a>

```java
public java.lang.String getOptionVersionInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `vpcSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="vpcSecurityGroupMembershipsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupMembershipsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbSecurityGroupMemberships`<sup>Required</sup> <a name="dbSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

---

##### `optionVersion`<sup>Required</sup> <a name="optionVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersion"></a>

```java
public java.lang.String getOptionVersion();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `vpcSecurityGroupMemberships`<sup>Required</sup> <a name="vpcSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsOptionGroupOptionConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>

---


### RdsOptionGroupTagsList <a name="RdsOptionGroupTagsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupTagsList;

new RdsOptionGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get"></a>

```java
public RdsOptionGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsOptionGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>>

---


### RdsOptionGroupTagsOutputReference <a name="RdsOptionGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_option_group.RdsOptionGroupTagsOutputReference;

new RdsOptionGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsOptionGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>

---



