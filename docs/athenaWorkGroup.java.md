# `athenaWorkGroup` Submodule <a name="`athenaWorkGroup` Submodule" id="@cdktn/provider-awscc.athenaWorkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkGroup <a name="AthenaWorkGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group awscc_athena_work_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroup;

AthenaWorkGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .recursiveDeleteOption(java.lang.Boolean|IResolvable)
//  .state(java.lang.String)
//  .tags(IResolvable|java.util.List<AthenaWorkGroupTags>)
//  .workGroupConfiguration(AthenaWorkGroupWorkGroupConfiguration)
//  .workGroupConfigurationUpdates(AthenaWorkGroupWorkGroupConfigurationUpdates)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The workGroup name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The workgroup description. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.recursiveDeleteOption">recursiveDeleteOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The option to delete the workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The state of the workgroup: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>></code> | One or more tags, separated by commas, that you want to attach to the workgroup as you create it. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfiguration">workGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | The workgroup configuration. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfigurationUpdates">workGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | The workgroup configuration update object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The workGroup name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The workgroup description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}

---

##### `recursiveDeleteOption`<sup>Optional</sup> <a name="recursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.recursiveDeleteOption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The option to delete the workgroup and its contents even if the workgroup contains any named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The state of the workgroup: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>>

One or more tags, separated by commas, that you want to attach to the workgroup as you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}

---

##### `workGroupConfiguration`<sup>Optional</sup> <a name="workGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

The workgroup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}

---

##### `workGroupConfigurationUpdates`<sup>Optional</sup> <a name="workGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfigurationUpdates"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

The workgroup configuration update object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration">putWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates">putWorkGroupConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption">resetRecursiveDeleteOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration">resetWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates">resetWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AthenaWorkGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>>

---

##### `putWorkGroupConfiguration` <a name="putWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration"></a>

```java
public void putWorkGroupConfiguration(AthenaWorkGroupWorkGroupConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---

##### `putWorkGroupConfigurationUpdates` <a name="putWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates"></a>

```java
public void putWorkGroupConfigurationUpdates(AthenaWorkGroupWorkGroupConfigurationUpdates value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRecursiveDeleteOption` <a name="resetRecursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption"></a>

```java
public void resetRecursiveDeleteOption()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkGroupConfiguration` <a name="resetWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration"></a>

```java
public void resetWorkGroupConfiguration()
```

##### `resetWorkGroupConfigurationUpdates` <a name="resetWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates"></a>

```java
public void resetWorkGroupConfigurationUpdates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroup;

AthenaWorkGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroup;

AthenaWorkGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroup;

AthenaWorkGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroup;

AthenaWorkGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AthenaWorkGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AthenaWorkGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AthenaWorkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AthenaWorkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration">workGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates">workGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput">recursiveDeleteOptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput">workGroupConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput">workGroupConfigurationUpdatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption">recursiveDeleteOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags"></a>

```java
public AthenaWorkGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a>

---

##### `workGroupConfiguration`<sup>Required</sup> <a name="workGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationOutputReference getWorkGroupConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a>

---

##### `workGroupConfigurationUpdates`<sup>Required</sup> <a name="workGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference getWorkGroupConfigurationUpdates();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recursiveDeleteOptionInput`<sup>Optional</sup> <a name="recursiveDeleteOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput"></a>

```java
public java.lang.Boolean|IResolvable getRecursiveDeleteOptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>>

---

##### `workGroupConfigurationInput`<sup>Optional</sup> <a name="workGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfiguration getWorkGroupConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---

##### `workGroupConfigurationUpdatesInput`<sup>Optional</sup> <a name="workGroupConfigurationUpdatesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdates getWorkGroupConfigurationUpdatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recursiveDeleteOption`<sup>Required</sup> <a name="recursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption"></a>

```java
public java.lang.Boolean|IResolvable getRecursiveDeleteOption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkGroupConfig <a name="AthenaWorkGroupConfig" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupConfig;

AthenaWorkGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .recursiveDeleteOption(java.lang.Boolean|IResolvable)
//  .state(java.lang.String)
//  .tags(IResolvable|java.util.List<AthenaWorkGroupTags>)
//  .workGroupConfiguration(AthenaWorkGroupWorkGroupConfiguration)
//  .workGroupConfigurationUpdates(AthenaWorkGroupWorkGroupConfigurationUpdates)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The workGroup name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The workgroup description. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption">recursiveDeleteOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The option to delete the workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state">state</a></code> | <code>java.lang.String</code> | The state of the workgroup: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>></code> | One or more tags, separated by commas, that you want to attach to the workgroup as you create it. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration">workGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | The workgroup configuration. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates">workGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | The workgroup configuration update object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The workGroup name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The workgroup description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}

---

##### `recursiveDeleteOption`<sup>Optional</sup> <a name="recursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption"></a>

```java
public java.lang.Boolean|IResolvable getRecursiveDeleteOption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The option to delete the workgroup and its contents even if the workgroup contains any named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The state of the workgroup: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>>

One or more tags, separated by commas, that you want to attach to the workgroup as you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}

---

##### `workGroupConfiguration`<sup>Optional</sup> <a name="workGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfiguration getWorkGroupConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

The workgroup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}

---

##### `workGroupConfigurationUpdates`<sup>Optional</sup> <a name="workGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdates getWorkGroupConfigurationUpdates();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

The workgroup configuration update object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}

---

### AthenaWorkGroupTags <a name="AthenaWorkGroupTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupTags;

AthenaWorkGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}.

---

### AthenaWorkGroupWorkGroupConfiguration <a name="AthenaWorkGroupWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfiguration;

AthenaWorkGroupWorkGroupConfiguration.builder()
//  .additionalConfiguration(java.lang.String)
//  .bytesScannedCutoffPerQuery(java.lang.Number)
//  .customerContentEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration)
//  .enforceWorkGroupConfiguration(java.lang.Boolean|IResolvable)
//  .engineConfiguration(AthenaWorkGroupWorkGroupConfigurationEngineConfiguration)
//  .engineVersion(AthenaWorkGroupWorkGroupConfigurationEngineVersion)
//  .executionRole(java.lang.String)
//  .managedQueryResultsConfiguration(AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration)
//  .monitoringConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration)
//  .publishCloudwatchMetricsEnabled(java.lang.Boolean|IResolvable)
//  .requesterPaysEnabled(java.lang.Boolean|IResolvable)
//  .resultConfiguration(AthenaWorkGroupWorkGroupConfigurationResultConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration">additionalConfiguration</a></code> | <code>java.lang.String</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>java.lang.Number</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. |

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration"></a>

```java
public java.lang.String getAdditionalConfiguration();
```

- *Type:* java.lang.String

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Number

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `customerContentEncryptionConfiguration`<sup>Optional</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration getCustomerContentEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getEnforceWorkGroupConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `engineConfiguration`<sup>Optional</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationEngineConfiguration getEngineConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationEngineVersion getEngineVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `managedQueryResultsConfiguration`<sup>Optional</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration getManagedQueryResultsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `publishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublishCloudwatchMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `resultConfiguration`<sup>Optional</sup> <a name="resultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationResultConfiguration getResultConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.

These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#result_configuration AthenaWorkGroup#result_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration;

AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration;

AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.builder()
//  .additionalConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .classifications(IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications>)
//  .coordinatorDpuSize(java.lang.Number)
//  .defaultExecutorDpuSize(java.lang.Number)
//  .maxConcurrentDpus(java.lang.Number)
//  .sparkProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs">additionalConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications">classifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>></code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>java.lang.Number</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>java.lang.Number</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>java.lang.Number</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties">sparkProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `additionalConfigs`<sup>Optional</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications> getClassifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>>

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `coordinatorDpuSize`<sup>Optional</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize"></a>

```java
public java.lang.Number getCoordinatorDpuSize();
```

- *Type:* java.lang.Number

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `defaultExecutorDpuSize`<sup>Optional</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize"></a>

```java
public java.lang.Number getDefaultExecutorDpuSize();
```

- *Type:* java.lang.Number

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `maxConcurrentDpus`<sup>Optional</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus"></a>

```java
public java.lang.Number getMaxConcurrentDpus();
```

- *Type:* java.lang.Number

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `sparkProperties`<sup>Optional</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications;

AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.builder()
//  .name(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of properties specified within a configuration classification. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineVersion;

AthenaWorkGroupWorkGroupConfigurationEngineVersion.builder()
//  .selectedEngineVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>java.lang.String</code> | The engine version requested by the user. |

---

##### `selectedEngineVersion`<sup>Optional</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```java
public java.lang.String getSelectedEngineVersion();
```

- *Type:* java.lang.String

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration;

AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .encryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;

AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration;

AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.builder()
//  .cloudwatchLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration)
//  .managedLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration)
//  .s3LoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `cloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration getCloudwatchLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `managedLoggingConfiguration`<sup>Optional</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration getManagedLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `s3LoggingConfiguration`<sup>Optional</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration getS3LoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration;

AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .logGroup(java.lang.String)
//  .logStreamNamePrefix(java.lang.String)
//  .logTypes(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>java.lang.String</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">logTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | The types of logs that you want to publish to CloudWatch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `logStreamNamePrefix`<sup>Optional</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```java
public java.lang.String getLogStreamNamePrefix();
```

- *Type:* java.lang.String

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getLogTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;

AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration;

AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .logLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation">logLocation</a></code> | <code>java.lang.String</code> | The Amazon S3 destination URI for log publishing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `logLocation`<sup>Optional</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```java
public java.lang.String getLogLocation();
```

- *Type:* java.lang.String

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationResultConfiguration;

AthenaWorkGroupWorkGroupConfigurationResultConfiguration.builder()
//  .aclConfiguration(AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration)
//  .encryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration)
//  .expectedBucketOwner(java.lang.String)
//  .outputLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration getAclConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration;

AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.builder()
//  .s3AclOption(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `s3AclOption`<sup>Optional</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration;

AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.builder()
//  .encryptionOption(java.lang.String)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdates;

AthenaWorkGroupWorkGroupConfigurationUpdates.builder()
//  .additionalConfiguration(java.lang.String)
//  .bytesScannedCutoffPerQuery(java.lang.Number)
//  .customerContentEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration)
//  .enforceWorkGroupConfiguration(java.lang.Boolean|IResolvable)
//  .engineConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration)
//  .engineVersion(AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion)
//  .executionRole(java.lang.String)
//  .managedQueryResultsConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration)
//  .monitoringConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration)
//  .publishCloudwatchMetricsEnabled(java.lang.Boolean|IResolvable)
//  .removeBytesScannedCutoffPerQuery(java.lang.Boolean|IResolvable)
//  .removeCustomerContentEncryptionConfiguration(java.lang.Boolean|IResolvable)
//  .requesterPaysEnabled(java.lang.Boolean|IResolvable)
//  .resultConfigurationUpdates(AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration">additionalConfiguration</a></code> | <code>java.lang.String</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>java.lang.Number</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery">removeBytesScannedCutoffPerQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the data usage control limit per query is removed. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration">removeCustomerContentEncryptionConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates">resultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | The result configuration information about the queries in this workgroup that will be updated. |

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration"></a>

```java
public java.lang.String getAdditionalConfiguration();
```

- *Type:* java.lang.String

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Number

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `customerContentEncryptionConfiguration`<sup>Optional</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration getCustomerContentEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getEnforceWorkGroupConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `engineConfiguration`<sup>Optional</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration getEngineConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion getEngineVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `managedQueryResultsConfiguration`<sup>Optional</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration getManagedQueryResultsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `publishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublishCloudwatchMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `removeBytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="removeBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery"></a>

```java
public java.lang.Boolean|IResolvable getRemoveBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the data usage control limit per query is removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}

---

##### `removeCustomerContentEncryptionConfiguration`<sup>Optional</sup> <a name="removeCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveCustomerContentEncryptionConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}.

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `resultConfigurationUpdates`<sup>Optional</sup> <a name="resultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates getResultConfigurationUpdates();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

The result configuration information about the queries in this workgroup that will be updated.

Includes the updated results location and an updated option for encrypting query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#result_configuration_updates AthenaWorkGroup#result_configuration_updates}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.builder()
//  .additionalConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .classifications(IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications>)
//  .coordinatorDpuSize(java.lang.Number)
//  .defaultExecutorDpuSize(java.lang.Number)
//  .maxConcurrentDpus(java.lang.Number)
//  .sparkProperties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs">additionalConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications">classifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>></code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>java.lang.Number</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>java.lang.Number</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>java.lang.Number</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties">sparkProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `additionalConfigs`<sup>Optional</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications> getClassifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>>

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `coordinatorDpuSize`<sup>Optional</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize"></a>

```java
public java.lang.Number getCoordinatorDpuSize();
```

- *Type:* java.lang.Number

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `defaultExecutorDpuSize`<sup>Optional</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize"></a>

```java
public java.lang.Number getDefaultExecutorDpuSize();
```

- *Type:* java.lang.Number

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `maxConcurrentDpus`<sup>Optional</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus"></a>

```java
public java.lang.Number getMaxConcurrentDpus();
```

- *Type:* java.lang.Number

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `sparkProperties`<sup>Optional</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications;

AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.builder()
//  .name(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of properties specified within a configuration classification. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion;

AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.builder()
//  .selectedEngineVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>java.lang.String</code> | The engine version requested by the user. |

---

##### `selectedEngineVersion`<sup>Optional</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion"></a>

```java
public java.lang.String getSelectedEngineVersion();
```

- *Type:* java.lang.String

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .encryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.builder()
//  .cloudwatchLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration)
//  .managedLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration)
//  .s3LoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `cloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration getCloudwatchLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `managedLoggingConfiguration`<sup>Optional</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration getManagedLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `s3LoggingConfiguration`<sup>Optional</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration getS3LoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .logGroup(java.lang.String)
//  .logStreamNamePrefix(java.lang.String)
//  .logTypes(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>java.lang.String</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">logTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | The types of logs that you want to publish to CloudWatch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `logStreamNamePrefix`<sup>Optional</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```java
public java.lang.String getLogStreamNamePrefix();
```

- *Type:* java.lang.String

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getLogTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .kmsKey(java.lang.String)
//  .logLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation">logLocation</a></code> | <code>java.lang.String</code> | The Amazon S3 destination URI for log publishing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `logLocation`<sup>Optional</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```java
public java.lang.String getLogLocation();
```

- *Type:* java.lang.String

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates;

AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.builder()
//  .aclConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration)
//  .encryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration)
//  .expectedBucketOwner(java.lang.String)
//  .outputLocation(java.lang.String)
//  .removeAclConfiguration(java.lang.Boolean|IResolvable)
//  .removeEncryptionConfiguration(java.lang.Boolean|IResolvable)
//  .removeExpectedBucketOwner(java.lang.Boolean|IResolvable)
//  .removeOutputLocation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration">removeAclConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration">removeEncryptionConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner">removeExpectedBucketOwner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation">removeOutputLocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}. |

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration getAclConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

##### `removeAclConfiguration`<sup>Optional</sup> <a name="removeAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveAclConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}.

---

##### `removeEncryptionConfiguration`<sup>Optional</sup> <a name="removeEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveEncryptionConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}.

---

##### `removeExpectedBucketOwner`<sup>Optional</sup> <a name="removeExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner"></a>

```java
public java.lang.Boolean|IResolvable getRemoveExpectedBucketOwner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}.

---

##### `removeOutputLocation`<sup>Optional</sup> <a name="removeOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation"></a>

```java
public java.lang.Boolean|IResolvable getRemoveOutputLocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}.

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.builder()
//  .s3AclOption(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `s3AclOption`<sup>Optional</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration;

AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.builder()
//  .encryptionOption(java.lang.String)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkGroupTagsList <a name="AthenaWorkGroupTagsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupTagsList;

new AthenaWorkGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get"></a>

```java
public AthenaWorkGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>>

---


### AthenaWorkGroupTagsOutputReference <a name="AthenaWorkGroupTagsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupTagsOutputReference;

new AthenaWorkGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>

---


### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList;

new AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference;

new AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications">putClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs">resetAdditionalConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications">resetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize">resetCoordinatorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">resetDefaultExecutorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus">resetMaxConcurrentDpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties">resetSparkProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClassifications` <a name="putClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications"></a>

```java
public void putClassifications(IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>>

---

##### `resetAdditionalConfigs` <a name="resetAdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```java
public void resetAdditionalConfigs()
```

##### `resetClassifications` <a name="resetClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications"></a>

```java
public void resetClassifications()
```

##### `resetCoordinatorDpuSize` <a name="resetCoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```java
public void resetCoordinatorDpuSize()
```

##### `resetDefaultExecutorDpuSize` <a name="resetDefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```java
public void resetDefaultExecutorDpuSize()
```

##### `resetMaxConcurrentDpus` <a name="resetMaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```java
public void resetMaxConcurrentDpus()
```

##### `resetSparkProperties` <a name="resetSparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties"></a>

```java
public void resetSparkProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications">classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput">additionalConfigsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput">classificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">coordinatorDpuSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">defaultExecutorDpuSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput">maxConcurrentDpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput">sparkPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs">additionalConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList getClassifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a>

---

##### `additionalConfigsInput`<sup>Optional</sup> <a name="additionalConfigsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classificationsInput`<sup>Optional</sup> <a name="classificationsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications> getClassificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>>

---

##### `coordinatorDpuSizeInput`<sup>Optional</sup> <a name="coordinatorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```java
public java.lang.Number getCoordinatorDpuSizeInput();
```

- *Type:* java.lang.Number

---

##### `defaultExecutorDpuSizeInput`<sup>Optional</sup> <a name="defaultExecutorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```java
public java.lang.Number getDefaultExecutorDpuSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDpusInput`<sup>Optional</sup> <a name="maxConcurrentDpusInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```java
public java.lang.Number getMaxConcurrentDpusInput();
```

- *Type:* java.lang.Number

---

##### `sparkPropertiesInput`<sup>Optional</sup> <a name="sparkPropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `additionalConfigs`<sup>Required</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `coordinatorDpuSize`<sup>Required</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```java
public java.lang.Number getCoordinatorDpuSize();
```

- *Type:* java.lang.Number

---

##### `defaultExecutorDpuSize`<sup>Required</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```java
public java.lang.Number getDefaultExecutorDpuSize();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDpus`<sup>Required</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```java
public java.lang.Number getMaxConcurrentDpus();
```

- *Type:* java.lang.Number

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationEngineConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference;

new AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">resetSelectedEngineVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelectedEngineVersion` <a name="resetSelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```java
public void resetSelectedEngineVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effectiveEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selectedEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveEngineVersion`<sup>Required</sup> <a name="effectiveEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```java
public java.lang.String getEffectiveEngineVersion();
```

- *Type:* java.lang.String

---

##### `selectedEngineVersionInput`<sup>Optional</sup> <a name="selectedEngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```java
public java.lang.String getSelectedEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `selectedEngineVersion`<sup>Required</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```java
public java.lang.String getSelectedEngineVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationEngineVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">resetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetLogStreamNamePrefix` <a name="resetLogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```java
public void resetLogStreamNamePrefix()
```

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```java
public void resetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">logStreamNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">logTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logStreamNamePrefixInput`<sup>Optional</sup> <a name="logStreamNamePrefixInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```java
public java.lang.String getLogStreamNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getLogTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStreamNamePrefix`<sup>Required</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```java
public java.lang.String getLogStreamNamePrefix();
```

- *Type:* java.lang.String

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getLogTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">putCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">putManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration">putS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">resetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">resetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">resetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLoggingConfiguration` <a name="putCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```java
public void putCloudwatchLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `putManagedLoggingConfiguration` <a name="putManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```java
public void putManagedLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `putS3LoggingConfiguration` <a name="putS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```java
public void putS3LoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `resetCloudwatchLoggingConfiguration` <a name="resetCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```java
public void resetCloudwatchLoggingConfiguration()
```

##### `resetManagedLoggingConfiguration` <a name="resetManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```java
public void resetManagedLoggingConfiguration()
```

##### `resetS3LoggingConfiguration` <a name="resetS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```java
public void resetS3LoggingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">cloudwatchLoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managedLoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3LoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLoggingConfiguration`<sup>Required</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference getCloudwatchLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `managedLoggingConfiguration`<sup>Required</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference getManagedLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3LoggingConfiguration`<sup>Required</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference getS3LoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration getCloudwatchLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `managedLoggingConfigurationInput`<sup>Optional</sup> <a name="managedLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration getManagedLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3LoggingConfigurationInput`<sup>Optional</sup> <a name="s3LoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration getS3LoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">resetLogLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLogLocation` <a name="resetLogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```java
public void resetLogLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">logLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">logLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `logLocationInput`<sup>Optional</sup> <a name="logLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```java
public java.lang.String getLogLocationInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```java
public java.lang.String getLogLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration">putCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration">putEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion">putEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration">putManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration">putResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">resetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration">resetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration">resetEnforceWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration">resetEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration">resetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">resetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled">resetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration">resetResultConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContentEncryptionConfiguration` <a name="putCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration"></a>

```java
public void putCustomerContentEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `putEngineConfiguration` <a name="putEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration"></a>

```java
public void putEngineConfiguration(AthenaWorkGroupWorkGroupConfigurationEngineConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---

##### `putEngineVersion` <a name="putEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion"></a>

```java
public void putEngineVersion(AthenaWorkGroupWorkGroupConfigurationEngineVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---

##### `putManagedQueryResultsConfiguration` <a name="putManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration"></a>

```java
public void putManagedQueryResultsConfiguration(AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration"></a>

```java
public void putMonitoringConfiguration(AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---

##### `putResultConfiguration` <a name="putResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration"></a>

```java
public void putResultConfiguration(AthenaWorkGroupWorkGroupConfigurationResultConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration"></a>

```java
public void resetAdditionalConfiguration()
```

##### `resetBytesScannedCutoffPerQuery` <a name="resetBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```java
public void resetBytesScannedCutoffPerQuery()
```

##### `resetCustomerContentEncryptionConfiguration` <a name="resetCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```java
public void resetCustomerContentEncryptionConfiguration()
```

##### `resetEnforceWorkGroupConfiguration` <a name="resetEnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration"></a>

```java
public void resetEnforceWorkGroupConfiguration()
```

##### `resetEngineConfiguration` <a name="resetEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration"></a>

```java
public void resetEngineConfiguration()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetManagedQueryResultsConfiguration` <a name="resetManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration"></a>

```java
public void resetManagedQueryResultsConfiguration()
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration"></a>

```java
public void resetMonitoringConfiguration()
```

##### `resetPublishCloudwatchMetricsEnabled` <a name="resetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```java
public void resetPublishCloudwatchMetricsEnabled()
```

##### `resetRequesterPaysEnabled` <a name="resetRequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```java
public void resetRequesterPaysEnabled()
```

##### `resetResultConfiguration` <a name="resetResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration"></a>

```java
public void resetResultConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytesScannedCutoffPerQueryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput">customerContentEncryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput">enforceWorkGroupConfigurationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput">engineConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput">engineVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput">managedQueryResultsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publishCloudwatchMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput">requesterPaysEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput">resultConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration">additionalConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerContentEncryptionConfiguration`<sup>Required</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference getCustomerContentEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engineConfiguration`<sup>Required</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference getEngineConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a>

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference getEngineVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a>

---

##### `managedQueryResultsConfiguration`<sup>Required</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference getManagedQueryResultsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `resultConfiguration`<sup>Required</sup> <a name="resultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference getResultConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a>

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput"></a>

```java
public java.lang.String getAdditionalConfigurationInput();
```

- *Type:* java.lang.String

---

##### `bytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="bytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQueryInput();
```

- *Type:* java.lang.Number

---

##### `customerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="customerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration getCustomerContentEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `enforceWorkGroupConfigurationInput`<sup>Optional</sup> <a name="enforceWorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceWorkGroupConfigurationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engineConfigurationInput`<sup>Optional</sup> <a name="engineConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationEngineConfiguration getEngineConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationEngineVersion getEngineVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `managedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="managedQueryResultsConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration getManagedQueryResultsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration getMonitoringConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---

##### `publishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublishCloudwatchMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPaysEnabledInput`<sup>Optional</sup> <a name="requesterPaysEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resultConfigurationInput`<sup>Optional</sup> <a name="resultConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationResultConfiguration getResultConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration"></a>

```java
public java.lang.String getAdditionalConfiguration();
```

- *Type:* java.lang.String

---

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Number

---

##### `enforceWorkGroupConfiguration`<sup>Required</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getEnforceWorkGroupConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `publishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublishCloudwatchMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption">resetS3AclOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3AclOption` <a name="resetS3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption"></a>

```java
public void resetS3AclOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```java
public java.lang.String getS3AclOptionInput();
```

- *Type:* java.lang.String

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```java
public void resetEncryptionOption()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```java
public java.lang.String getEncryptionOptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```java
public void putAclConfiguration(AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```java
public void resetAclConfiguration()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```java
public void resetOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference getAclConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration getAclConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```java
public java.lang.String getOutputLocationInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationResultConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList;

new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications">putClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs">resetAdditionalConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications">resetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize">resetCoordinatorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">resetDefaultExecutorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus">resetMaxConcurrentDpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties">resetSparkProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClassifications` <a name="putClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications"></a>

```java
public void putClassifications(IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>>

---

##### `resetAdditionalConfigs` <a name="resetAdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```java
public void resetAdditionalConfigs()
```

##### `resetClassifications` <a name="resetClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications"></a>

```java
public void resetClassifications()
```

##### `resetCoordinatorDpuSize` <a name="resetCoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```java
public void resetCoordinatorDpuSize()
```

##### `resetDefaultExecutorDpuSize` <a name="resetDefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```java
public void resetDefaultExecutorDpuSize()
```

##### `resetMaxConcurrentDpus` <a name="resetMaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```java
public void resetMaxConcurrentDpus()
```

##### `resetSparkProperties` <a name="resetSparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties"></a>

```java
public void resetSparkProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications">classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput">additionalConfigsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput">classificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">coordinatorDpuSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">defaultExecutorDpuSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput">maxConcurrentDpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput">sparkPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs">additionalConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList getClassifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a>

---

##### `additionalConfigsInput`<sup>Optional</sup> <a name="additionalConfigsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classificationsInput`<sup>Optional</sup> <a name="classificationsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput"></a>

```java
public IResolvable|java.util.List<AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications> getClassificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>>

---

##### `coordinatorDpuSizeInput`<sup>Optional</sup> <a name="coordinatorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```java
public java.lang.Number getCoordinatorDpuSizeInput();
```

- *Type:* java.lang.Number

---

##### `defaultExecutorDpuSizeInput`<sup>Optional</sup> <a name="defaultExecutorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```java
public java.lang.Number getDefaultExecutorDpuSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDpusInput`<sup>Optional</sup> <a name="maxConcurrentDpusInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```java
public java.lang.Number getMaxConcurrentDpusInput();
```

- *Type:* java.lang.Number

---

##### `sparkPropertiesInput`<sup>Optional</sup> <a name="sparkPropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `additionalConfigs`<sup>Required</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `coordinatorDpuSize`<sup>Required</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```java
public java.lang.Number getCoordinatorDpuSize();
```

- *Type:* java.lang.Number

---

##### `defaultExecutorDpuSize`<sup>Required</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```java
public java.lang.Number getDefaultExecutorDpuSize();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDpus`<sup>Required</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```java
public java.lang.Number getMaxConcurrentDpus();
```

- *Type:* java.lang.Number

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion">resetSelectedEngineVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelectedEngineVersion` <a name="resetSelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```java
public void resetSelectedEngineVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion">effectiveEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput">selectedEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveEngineVersion`<sup>Required</sup> <a name="effectiveEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```java
public java.lang.String getEffectiveEngineVersion();
```

- *Type:* java.lang.String

---

##### `selectedEngineVersionInput`<sup>Optional</sup> <a name="selectedEngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```java
public java.lang.String getSelectedEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `selectedEngineVersion`<sup>Required</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion"></a>

```java
public java.lang.String getSelectedEngineVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">resetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetLogStreamNamePrefix` <a name="resetLogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```java
public void resetLogStreamNamePrefix()
```

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```java
public void resetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">logStreamNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">logTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logStreamNamePrefixInput`<sup>Optional</sup> <a name="logStreamNamePrefixInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```java
public java.lang.String getLogStreamNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getLogTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStreamNamePrefix`<sup>Required</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```java
public java.lang.String getLogStreamNamePrefix();
```

- *Type:* java.lang.String

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getLogTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">putCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">putManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration">putS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">resetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">resetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">resetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLoggingConfiguration` <a name="putCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```java
public void putCloudwatchLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `putManagedLoggingConfiguration` <a name="putManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```java
public void putManagedLoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `putS3LoggingConfiguration` <a name="putS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```java
public void putS3LoggingConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `resetCloudwatchLoggingConfiguration` <a name="resetCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```java
public void resetCloudwatchLoggingConfiguration()
```

##### `resetManagedLoggingConfiguration` <a name="resetManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```java
public void resetManagedLoggingConfiguration()
```

##### `resetS3LoggingConfiguration` <a name="resetS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```java
public void resetS3LoggingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">cloudwatchLoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managedLoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3LoggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLoggingConfiguration`<sup>Required</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference getCloudwatchLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `managedLoggingConfiguration`<sup>Required</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference getManagedLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3LoggingConfiguration`<sup>Required</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference getS3LoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration getCloudwatchLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `managedLoggingConfigurationInput`<sup>Optional</sup> <a name="managedLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration getManagedLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3LoggingConfigurationInput`<sup>Optional</sup> <a name="s3LoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration getS3LoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">resetLogLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLogLocation` <a name="resetLogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```java
public void resetLogLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">logLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">logLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `logLocationInput`<sup>Optional</sup> <a name="logLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```java
public java.lang.String getLogLocationInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```java
public java.lang.String getLogLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration">putCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration">putEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion">putEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration">putManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates">putResultConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery">resetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration">resetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration">resetEnforceWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration">resetEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration">resetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled">resetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery">resetRemoveBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration">resetRemoveCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled">resetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates">resetResultConfigurationUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContentEncryptionConfiguration` <a name="putCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration"></a>

```java
public void putCustomerContentEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---

##### `putEngineConfiguration` <a name="putEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration"></a>

```java
public void putEngineConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---

##### `putEngineVersion` <a name="putEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion"></a>

```java
public void putEngineVersion(AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---

##### `putManagedQueryResultsConfiguration` <a name="putManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration"></a>

```java
public void putManagedQueryResultsConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration"></a>

```java
public void putMonitoringConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---

##### `putResultConfigurationUpdates` <a name="putResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates"></a>

```java
public void putResultConfigurationUpdates(AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration"></a>

```java
public void resetAdditionalConfiguration()
```

##### `resetBytesScannedCutoffPerQuery` <a name="resetBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery"></a>

```java
public void resetBytesScannedCutoffPerQuery()
```

##### `resetCustomerContentEncryptionConfiguration` <a name="resetCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```java
public void resetCustomerContentEncryptionConfiguration()
```

##### `resetEnforceWorkGroupConfiguration` <a name="resetEnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration"></a>

```java
public void resetEnforceWorkGroupConfiguration()
```

##### `resetEngineConfiguration` <a name="resetEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration"></a>

```java
public void resetEngineConfiguration()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole"></a>

```java
public void resetExecutionRole()
```

##### `resetManagedQueryResultsConfiguration` <a name="resetManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration"></a>

```java
public void resetManagedQueryResultsConfiguration()
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration"></a>

```java
public void resetMonitoringConfiguration()
```

##### `resetPublishCloudwatchMetricsEnabled` <a name="resetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```java
public void resetPublishCloudwatchMetricsEnabled()
```

##### `resetRemoveBytesScannedCutoffPerQuery` <a name="resetRemoveBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery"></a>

```java
public void resetRemoveBytesScannedCutoffPerQuery()
```

##### `resetRemoveCustomerContentEncryptionConfiguration` <a name="resetRemoveCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration"></a>

```java
public void resetRemoveCustomerContentEncryptionConfiguration()
```

##### `resetRequesterPaysEnabled` <a name="resetRequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled"></a>

```java
public void resetRequesterPaysEnabled()
```

##### `resetResultConfigurationUpdates` <a name="resetResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates"></a>

```java
public void resetResultConfigurationUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates">resultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput">bytesScannedCutoffPerQueryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput">customerContentEncryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput">enforceWorkGroupConfigurationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput">engineConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput">engineVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput">managedQueryResultsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput">publishCloudwatchMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput">removeBytesScannedCutoffPerQueryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput">removeCustomerContentEncryptionConfigurationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput">requesterPaysEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput">resultConfigurationUpdatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration">additionalConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery">removeBytesScannedCutoffPerQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration">removeCustomerContentEncryptionConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerContentEncryptionConfiguration`<sup>Required</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference getCustomerContentEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engineConfiguration`<sup>Required</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference getEngineConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a>

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference getEngineVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a>

---

##### `managedQueryResultsConfiguration`<sup>Required</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference getManagedQueryResultsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a>

---

##### `resultConfigurationUpdates`<sup>Required</sup> <a name="resultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference getResultConfigurationUpdates();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a>

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput"></a>

```java
public java.lang.String getAdditionalConfigurationInput();
```

- *Type:* java.lang.String

---

##### `bytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="bytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQueryInput();
```

- *Type:* java.lang.Number

---

##### `customerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="customerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration getCustomerContentEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---

##### `enforceWorkGroupConfigurationInput`<sup>Optional</sup> <a name="enforceWorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceWorkGroupConfigurationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engineConfigurationInput`<sup>Optional</sup> <a name="engineConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration getEngineConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion getEngineVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `managedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="managedQueryResultsConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration getManagedQueryResultsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration getMonitoringConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---

##### `publishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublishCloudwatchMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeBytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="removeBytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveBytesScannedCutoffPerQueryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeCustomerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="removeCustomerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveCustomerContentEncryptionConfigurationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPaysEnabledInput`<sup>Optional</sup> <a name="requesterPaysEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resultConfigurationUpdatesInput`<sup>Optional</sup> <a name="resultConfigurationUpdatesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates getResultConfigurationUpdatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration"></a>

```java
public java.lang.String getAdditionalConfiguration();
```

- *Type:* java.lang.String

---

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery"></a>

```java
public java.lang.Number getBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Number

---

##### `enforceWorkGroupConfiguration`<sup>Required</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getEnforceWorkGroupConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `publishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublishCloudwatchMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeBytesScannedCutoffPerQuery`<sup>Required</sup> <a name="removeBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery"></a>

```java
public java.lang.Boolean|IResolvable getRemoveBytesScannedCutoffPerQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeCustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="removeCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveCustomerContentEncryptionConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequesterPaysEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption">resetS3AclOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3AclOption` <a name="resetS3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption"></a>

```java
public void resetS3AclOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```java
public java.lang.String getS3AclOptionInput();
```

- *Type:* java.lang.String

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption"></a>

```java
public java.lang.String getS3AclOption();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```java
public void resetEncryptionOption()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```java
public java.lang.String getEncryptionOptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```java
public java.lang.String getEncryptionOption();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_work_group.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference;

new AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration">resetRemoveAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration">resetRemoveEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner">resetRemoveExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation">resetRemoveOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration"></a>

```java
public void putAclConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration"></a>

```java
public void resetAclConfiguration()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation"></a>

```java
public void resetOutputLocation()
```

##### `resetRemoveAclConfiguration` <a name="resetRemoveAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration"></a>

```java
public void resetRemoveAclConfiguration()
```

##### `resetRemoveEncryptionConfiguration` <a name="resetRemoveEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration"></a>

```java
public void resetRemoveEncryptionConfiguration()
```

##### `resetRemoveExpectedBucketOwner` <a name="resetRemoveExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner"></a>

```java
public void resetRemoveExpectedBucketOwner()
```

##### `resetRemoveOutputLocation` <a name="resetRemoveOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation"></a>

```java
public void resetRemoveOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput">removeAclConfigurationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput">removeEncryptionConfigurationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput">removeExpectedBucketOwnerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput">removeOutputLocationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration">removeAclConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration">removeEncryptionConfiguration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner">removeExpectedBucketOwner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation">removeOutputLocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference getAclConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration"></a>

```java
public AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration getAclConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput"></a>

```java
public java.lang.String getOutputLocationInput();
```

- *Type:* java.lang.String

---

##### `removeAclConfigurationInput`<sup>Optional</sup> <a name="removeAclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveAclConfigurationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeEncryptionConfigurationInput`<sup>Optional</sup> <a name="removeEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveEncryptionConfigurationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeExpectedBucketOwnerInput`<sup>Optional</sup> <a name="removeExpectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveExpectedBucketOwnerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeOutputLocationInput`<sup>Optional</sup> <a name="removeOutputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveOutputLocationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

---

##### `removeAclConfiguration`<sup>Required</sup> <a name="removeAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveAclConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeEncryptionConfiguration`<sup>Required</sup> <a name="removeEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration"></a>

```java
public java.lang.Boolean|IResolvable getRemoveEncryptionConfiguration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeExpectedBucketOwner`<sup>Required</sup> <a name="removeExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner"></a>

```java
public java.lang.Boolean|IResolvable getRemoveExpectedBucketOwner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `removeOutputLocation`<sup>Required</sup> <a name="removeOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation"></a>

```java
public java.lang.Boolean|IResolvable getRemoveOutputLocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---



