# `dataAwsccApsWorkspace` Submodule <a name="`dataAwsccApsWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccApsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApsWorkspace <a name="DataAwsccApsWorkspace" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace awscc_aps_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspace;

DataAwsccApsWorkspace.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace#id DataAwsccApsWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApsWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspace;

DataAwsccApsWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspace;

DataAwsccApsWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspace;

DataAwsccApsWorkspace.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspace;

DataAwsccApsWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccApsWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccApsWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccApsWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccApsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alertManagerDefinition">alertManagerDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference">DataAwsccApsWorkspaceLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.prometheusEndpoint">prometheusEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.queryLoggingConfiguration">queryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList">DataAwsccApsWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceConfiguration">workspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `alertManagerDefinition`<sup>Required</sup> <a name="alertManagerDefinition" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alertManagerDefinition"></a>

```java
public java.lang.String getAlertManagerDefinition();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.loggingConfiguration"></a>

```java
public DataAwsccApsWorkspaceLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference">DataAwsccApsWorkspaceLoggingConfigurationOutputReference</a>

---

##### `prometheusEndpoint`<sup>Required</sup> <a name="prometheusEndpoint" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.prometheusEndpoint"></a>

```java
public java.lang.String getPrometheusEndpoint();
```

- *Type:* java.lang.String

---

##### `queryLoggingConfiguration`<sup>Required</sup> <a name="queryLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.queryLoggingConfiguration"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference getQueryLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tags"></a>

```java
public DataAwsccApsWorkspaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList">DataAwsccApsWorkspaceTagsList</a>

---

##### `workspaceConfiguration`<sup>Required</sup> <a name="workspaceConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceConfiguration"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference getWorkspaceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApsWorkspaceConfig <a name="DataAwsccApsWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceConfig;

DataAwsccApsWorkspaceConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace#id DataAwsccApsWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApsWorkspaceLoggingConfiguration <a name="DataAwsccApsWorkspaceLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceLoggingConfiguration;

DataAwsccApsWorkspaceLoggingConfiguration.builder()
    .build();
```


### DataAwsccApsWorkspaceQueryLoggingConfiguration <a name="DataAwsccApsWorkspaceQueryLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfiguration;

DataAwsccApsWorkspaceQueryLoggingConfiguration.builder()
    .build();
```


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations;

DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations.builder()
    .build();
```


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs;

DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.builder()
    .build();
```


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters;

DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters.builder()
    .build();
```


### DataAwsccApsWorkspaceTags <a name="DataAwsccApsWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceTags;

DataAwsccApsWorkspaceTags.builder()
    .build();
```


### DataAwsccApsWorkspaceWorkspaceConfiguration <a name="DataAwsccApsWorkspaceWorkspaceConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfiguration;

DataAwsccApsWorkspaceWorkspaceConfiguration.builder()
    .build();
```


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets;

DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.builder()
    .build();
```


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet;

DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.builder()
    .build();
```


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits;

DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApsWorkspaceLoggingConfigurationOutputReference <a name="DataAwsccApsWorkspaceLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference;

new DataAwsccApsWorkspaceLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration">DataAwsccApsWorkspaceLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceLoggingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration">DataAwsccApsWorkspaceLoggingConfiguration</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference;

new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference;

new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold">qspThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold"></a>

```java
public java.lang.Number getQspThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList;

new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.get"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference;

new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference;

new DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration">DataAwsccApsWorkspaceQueryLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceQueryLoggingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration">DataAwsccApsWorkspaceQueryLoggingConfiguration</a>

---


### DataAwsccApsWorkspaceTagsList <a name="DataAwsccApsWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceTagsList;

new DataAwsccApsWorkspaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.get"></a>

```java
public DataAwsccApsWorkspaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApsWorkspaceTagsOutputReference <a name="DataAwsccApsWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceTagsOutputReference;

new DataAwsccApsWorkspaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags">DataAwsccApsWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags">DataAwsccApsWorkspaceTags</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList;

new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference;

new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference;

new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries">maxSeries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxSeries`<sup>Required</sup> <a name="maxSeries" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries"></a>

```java
public java.lang.Number getMaxSeries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList;

new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference;

new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet">labelSet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList getLabelSet();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_aps_workspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference;

new DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets">limitsPerLabelSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds">outOfOrderTimeWindowInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds">ruleQueryOffsetInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration">DataAwsccApsWorkspaceWorkspaceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitsPerLabelSets`<sup>Required</sup> <a name="limitsPerLabelSets" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList getLimitsPerLabelSets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a>

---

##### `outOfOrderTimeWindowInSeconds`<sup>Required</sup> <a name="outOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds"></a>

```java
public java.lang.Number getOutOfOrderTimeWindowInSeconds();
```

- *Type:* java.lang.Number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `ruleQueryOffsetInSeconds`<sup>Required</sup> <a name="ruleQueryOffsetInSeconds" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds"></a>

```java
public java.lang.Number getRuleQueryOffsetInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccApsWorkspaceWorkspaceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration">DataAwsccApsWorkspaceWorkspaceConfiguration</a>

---



