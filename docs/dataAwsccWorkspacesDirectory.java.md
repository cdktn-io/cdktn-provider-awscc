# `dataAwsccWorkspacesDirectory` Submodule <a name="`dataAwsccWorkspacesDirectory` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesDirectory <a name="DataAwsccWorkspacesDirectory" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectory;

DataAwsccWorkspacesDirectory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#id DataAwsccWorkspacesDirectory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectory;

DataAwsccWorkspacesDirectory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectory;

DataAwsccWorkspacesDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectory;

DataAwsccWorkspacesDirectory.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectory;

DataAwsccWorkspacesDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccWorkspacesDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccWorkspacesDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccWorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference">DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.customerUserName">customerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryType">directoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpv6Addresses">dnsIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.enableSelfService">enableSelfService</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.endpointEncryptionMode">endpointEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.iamRoleId">iamRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcConfig">idcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference">DataAwsccWorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.ipGroupIds">ipGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.microsoftEntraConfig">microsoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference">DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.registrationCode">registrationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.samlProperties">samlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference">DataAwsccWorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.selfservicePermissions">selfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference">DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.streamingProperties">streamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList">DataAwsccWorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.userIdentityType">userIdentityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryDescription">workspaceDirectoryDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryName">workspaceDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceType">workspaceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.activeDirectoryConfig"></a>

```java
public DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference getActiveDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference">DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateBasedAuthProperties`<sup>Required</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```java
public DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference getCertificateBasedAuthProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `customerUserName`<sup>Required</sup> <a name="customerUserName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.customerUserName"></a>

```java
public java.lang.String getCustomerUserName();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryType"></a>

```java
public java.lang.String getDirectoryType();
```

- *Type:* java.lang.String

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsIpv6Addresses`<sup>Required</sup> <a name="dnsIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableSelfService`<sup>Required</sup> <a name="enableSelfService" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.enableSelfService"></a>

```java
public IResolvable getEnableSelfService();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `endpointEncryptionMode`<sup>Required</sup> <a name="endpointEncryptionMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.endpointEncryptionMode"></a>

```java
public java.lang.String getEndpointEncryptionMode();
```

- *Type:* java.lang.String

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.iamRoleId"></a>

```java
public java.lang.String getIamRoleId();
```

- *Type:* java.lang.String

---

##### `idcConfig`<sup>Required</sup> <a name="idcConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcConfig"></a>

```java
public DataAwsccWorkspacesDirectoryIdcConfigOutputReference getIdcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference">DataAwsccWorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `ipGroupIds`<sup>Required</sup> <a name="ipGroupIds" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.ipGroupIds"></a>

```java
public java.util.List<java.lang.String> getIpGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `microsoftEntraConfig`<sup>Required</sup> <a name="microsoftEntraConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.microsoftEntraConfig"></a>

```java
public DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference getMicrosoftEntraConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference">DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.registrationCode"></a>

```java
public java.lang.String getRegistrationCode();
```

- *Type:* java.lang.String

---

##### `samlProperties`<sup>Required</sup> <a name="samlProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.samlProperties"></a>

```java
public DataAwsccWorkspacesDirectorySamlPropertiesOutputReference getSamlProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference">DataAwsccWorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `selfservicePermissions`<sup>Required</sup> <a name="selfservicePermissions" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.selfservicePermissions"></a>

```java
public DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference getSelfservicePermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference">DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streamingProperties`<sup>Required</sup> <a name="streamingProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.streamingProperties"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference getStreamingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tags"></a>

```java
public DataAwsccWorkspacesDirectoryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList">DataAwsccWorkspacesDirectoryTagsList</a>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `userIdentityType`<sup>Required</sup> <a name="userIdentityType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.userIdentityType"></a>

```java
public java.lang.String getUserIdentityType();
```

- *Type:* java.lang.String

---

##### `workspaceAccessProperties`<sup>Required</sup> <a name="workspaceAccessProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceAccessProperties"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference getWorkspaceAccessProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspaceCreationProperties`<sup>Required</sup> <a name="workspaceCreationProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceCreationProperties"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference getWorkspaceCreationProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspaceDirectoryDescription`<sup>Required</sup> <a name="workspaceDirectoryDescription" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```java
public java.lang.String getWorkspaceDirectoryDescription();
```

- *Type:* java.lang.String

---

##### `workspaceDirectoryName`<sup>Required</sup> <a name="workspaceDirectoryName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryName"></a>

```java
public java.lang.String getWorkspaceDirectoryName();
```

- *Type:* java.lang.String

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```java
public java.lang.String getWorkspaceSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `workspaceType`<sup>Required</sup> <a name="workspaceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceType"></a>

```java
public java.lang.String getWorkspaceType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesDirectoryActiveDirectoryConfig <a name="DataAwsccWorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig;

DataAwsccWorkspacesDirectoryActiveDirectoryConfig.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties <a name="DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties;

DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryConfig <a name="DataAwsccWorkspacesDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryConfig;

DataAwsccWorkspacesDirectoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#id DataAwsccWorkspacesDirectory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesDirectoryIdcConfig <a name="DataAwsccWorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryIdcConfig;

DataAwsccWorkspacesDirectoryIdcConfig.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryMicrosoftEntraConfig <a name="DataAwsccWorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig;

DataAwsccWorkspacesDirectoryMicrosoftEntraConfig.builder()
    .build();
```


### DataAwsccWorkspacesDirectorySamlProperties <a name="DataAwsccWorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectorySamlProperties;

DataAwsccWorkspacesDirectorySamlProperties.builder()
    .build();
```


### DataAwsccWorkspacesDirectorySelfservicePermissions <a name="DataAwsccWorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectorySelfservicePermissions;

DataAwsccWorkspacesDirectorySelfservicePermissions.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryStreamingProperties <a name="DataAwsccWorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingProperties;

DataAwsccWorkspacesDirectoryStreamingProperties.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator;

DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors;

DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings;

DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryTags <a name="DataAwsccWorkspacesDirectoryTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryTags;

DataAwsccWorkspacesDirectoryTags.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessProperties <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties;

DataAwsccWorkspacesDirectoryWorkspaceAccessProperties.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig;

DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints;

DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.builder()
    .build();
```


### DataAwsccWorkspacesDirectoryWorkspaceCreationProperties <a name="DataAwsccWorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties;

DataAwsccWorkspacesDirectoryWorkspaceCreationProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference;

new DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">serviceAccountSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig">DataAwsccWorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `serviceAccountSecretArn`<sup>Required</sup> <a name="serviceAccountSecretArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```java
public java.lang.String getServiceAccountSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryActiveDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig">DataAwsccWorkspacesDirectoryActiveDirectoryConfig</a>

---


### DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference;

new DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties">DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```java
public java.lang.String getCertificateAuthorityArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties">DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### DataAwsccWorkspacesDirectoryIdcConfigOutputReference <a name="DataAwsccWorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference;

new DataAwsccWorkspacesDirectoryIdcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig">DataAwsccWorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryIdcConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig">DataAwsccWorkspacesDirectoryIdcConfig</a>

---


### DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference;

new DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">applicationConfigSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig">DataAwsccWorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationConfigSecretArn`<sup>Required</sup> <a name="applicationConfigSecretArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```java
public java.lang.String getApplicationConfigSecretArn();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryMicrosoftEntraConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig">DataAwsccWorkspacesDirectoryMicrosoftEntraConfig</a>

---


### DataAwsccWorkspacesDirectorySamlPropertiesOutputReference <a name="DataAwsccWorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference;

new DataAwsccWorkspacesDirectorySamlPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">relayStateParameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">userAccessUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties">DataAwsccWorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relayStateParameterName`<sup>Required</sup> <a name="relayStateParameterName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```java
public java.lang.String getRelayStateParameterName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userAccessUrl`<sup>Required</sup> <a name="userAccessUrl" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```java
public java.lang.String getUserAccessUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectorySamlProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties">DataAwsccWorkspacesDirectorySamlProperties</a>

---


### DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference <a name="DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference;

new DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">changeComputeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">restartWorkspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">switchRunningMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions">DataAwsccWorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changeComputeType`<sup>Required</sup> <a name="changeComputeType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```java
public java.lang.String getChangeComputeType();
```

- *Type:* java.lang.String

---

##### `increaseVolumeSize`<sup>Required</sup> <a name="increaseVolumeSize" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```java
public java.lang.String getIncreaseVolumeSize();
```

- *Type:* java.lang.String

---

##### `rebuildWorkspace`<sup>Required</sup> <a name="rebuildWorkspace" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```java
public java.lang.String getRebuildWorkspace();
```

- *Type:* java.lang.String

---

##### `restartWorkspace`<sup>Required</sup> <a name="restartWorkspace" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```java
public java.lang.String getRestartWorkspace();
```

- *Type:* java.lang.String

---

##### `switchRunningMode`<sup>Required</sup> <a name="switchRunningMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```java
public java.lang.String getSwitchRunningMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectorySelfservicePermissions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions">DataAwsccWorkspacesDirectorySelfservicePermissions</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference;

new DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">preferredProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `preferredProtocol`<sup>Required</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```java
public java.lang.String getPreferredProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference;

new DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">globalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">storageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">streamingExperiencePreferredProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties">DataAwsccWorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `globalAccelerator`<sup>Required</sup> <a name="globalAccelerator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference getGlobalAccelerator();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `storageConnectors`<sup>Required</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList getStorageConnectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `streamingExperiencePreferredProtocol`<sup>Required</sup> <a name="streamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```java
public java.lang.String getStreamingExperiencePreferredProtocol();
```

- *Type:* java.lang.String

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList getUserSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties">DataAwsccWorkspacesDirectoryStreamingProperties</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList;

new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference;

new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList;

new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference;

new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">maximumLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```java
public java.lang.Number getMaximumLength();
```

- *Type:* java.lang.Number

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### DataAwsccWorkspacesDirectoryTagsList <a name="DataAwsccWorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryTagsList;

new DataAwsccWorkspacesDirectoryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get"></a>

```java
public DataAwsccWorkspacesDirectoryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccWorkspacesDirectoryTagsOutputReference <a name="DataAwsccWorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryTagsOutputReference;

new DataAwsccWorkspacesDirectoryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags">DataAwsccWorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags">DataAwsccWorkspacesDirectoryTags</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">accessEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessEndpointType`<sup>Required</sup> <a name="accessEndpointType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```java
public java.lang.String getAccessEndpointType();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">internetFallbackProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList getAccessEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `internetFallbackProtocols`<sup>Required</sup> <a name="internetFallbackProtocols" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```java
public java.util.List<java.lang.String> getInternetFallbackProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;

new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">accessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">deviceTypeChromeOs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">deviceTypeIos</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">deviceTypeWorkSpacesThinClient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">deviceTypeZeroClient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties">DataAwsccWorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessEndpointConfig`<sup>Required</sup> <a name="accessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference getAccessEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `deviceTypeAndroid`<sup>Required</sup> <a name="deviceTypeAndroid" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```java
public java.lang.String getDeviceTypeAndroid();
```

- *Type:* java.lang.String

---

##### `deviceTypeChromeOs`<sup>Required</sup> <a name="deviceTypeChromeOs" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```java
public java.lang.String getDeviceTypeChromeOs();
```

- *Type:* java.lang.String

---

##### `deviceTypeIos`<sup>Required</sup> <a name="deviceTypeIos" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```java
public java.lang.String getDeviceTypeIos();
```

- *Type:* java.lang.String

---

##### `deviceTypeLinux`<sup>Required</sup> <a name="deviceTypeLinux" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```java
public java.lang.String getDeviceTypeLinux();
```

- *Type:* java.lang.String

---

##### `deviceTypeOsx`<sup>Required</sup> <a name="deviceTypeOsx" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```java
public java.lang.String getDeviceTypeOsx();
```

- *Type:* java.lang.String

---

##### `deviceTypeWeb`<sup>Required</sup> <a name="deviceTypeWeb" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```java
public java.lang.String getDeviceTypeWeb();
```

- *Type:* java.lang.String

---

##### `deviceTypeWindows`<sup>Required</sup> <a name="deviceTypeWindows" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```java
public java.lang.String getDeviceTypeWindows();
```

- *Type:* java.lang.String

---

##### `deviceTypeWorkSpacesThinClient`<sup>Required</sup> <a name="deviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```java
public java.lang.String getDeviceTypeWorkSpacesThinClient();
```

- *Type:* java.lang.String

---

##### `deviceTypeZeroClient`<sup>Required</sup> <a name="deviceTypeZeroClient" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```java
public java.lang.String getDeviceTypeZeroClient();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceAccessProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties">DataAwsccWorkspacesDirectoryWorkspaceAccessProperties</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_workspaces_directory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;

new DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">defaultOu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">instanceIamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties">DataAwsccWorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSecurityGroupId`<sup>Required</sup> <a name="customSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```java
public java.lang.String getCustomSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `defaultOu`<sup>Required</sup> <a name="defaultOu" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```java
public java.lang.String getDefaultOu();
```

- *Type:* java.lang.String

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```java
public IResolvable getEnableInternetAccess();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableMaintenanceMode`<sup>Required</sup> <a name="enableMaintenanceMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```java
public IResolvable getEnableMaintenanceMode();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `instanceIamRoleArn`<sup>Required</sup> <a name="instanceIamRoleArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```java
public java.lang.String getInstanceIamRoleArn();
```

- *Type:* java.lang.String

---

##### `userEnabledAsLocalAdministrator`<sup>Required</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```java
public IResolvable getUserEnabledAsLocalAdministrator();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccWorkspacesDirectoryWorkspaceCreationProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties">DataAwsccWorkspacesDirectoryWorkspaceCreationProperties</a>

---



