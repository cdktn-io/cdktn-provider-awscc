# `dataAwsccEfsAccessPoint` Submodule <a name="`dataAwsccEfsAccessPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEfsAccessPoint <a name="DataAwsccEfsAccessPoint" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/efs_access_point awscc_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPoint;

DataAwsccEfsAccessPoint.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/efs_access_point#id DataAwsccEfsAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEfsAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPoint;

DataAwsccEfsAccessPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPoint;

DataAwsccEfsAccessPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPoint;

DataAwsccEfsAccessPoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPoint;

DataAwsccEfsAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEfsAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEfsAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEfsAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEfsAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/efs_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEfsAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointId">accessPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointTags">accessPointTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList">DataAwsccEfsAccessPointAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference">DataAwsccEfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference">DataAwsccEfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointId"></a>

```java
public java.lang.String getAccessPointId();
```

- *Type:* java.lang.String

---

##### `accessPointTags`<sup>Required</sup> <a name="accessPointTags" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.accessPointTags"></a>

```java
public DataAwsccEfsAccessPointAccessPointTagsList getAccessPointTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList">DataAwsccEfsAccessPointAccessPointTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.posixUser"></a>

```java
public DataAwsccEfsAccessPointPosixUserOutputReference getPosixUser();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference">DataAwsccEfsAccessPointPosixUserOutputReference</a>

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.rootDirectory"></a>

```java
public DataAwsccEfsAccessPointRootDirectoryOutputReference getRootDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference">DataAwsccEfsAccessPointRootDirectoryOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEfsAccessPointAccessPointTags <a name="DataAwsccEfsAccessPointAccessPointTags" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointAccessPointTags;

DataAwsccEfsAccessPointAccessPointTags.builder()
    .build();
```


### DataAwsccEfsAccessPointConfig <a name="DataAwsccEfsAccessPointConfig" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointConfig;

DataAwsccEfsAccessPointConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/efs_access_point#id DataAwsccEfsAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEfsAccessPointPosixUser <a name="DataAwsccEfsAccessPointPosixUser" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointPosixUser;

DataAwsccEfsAccessPointPosixUser.builder()
    .build();
```


### DataAwsccEfsAccessPointRootDirectory <a name="DataAwsccEfsAccessPointRootDirectory" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointRootDirectory;

DataAwsccEfsAccessPointRootDirectory.builder()
    .build();
```


### DataAwsccEfsAccessPointRootDirectoryCreationInfo <a name="DataAwsccEfsAccessPointRootDirectoryCreationInfo" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointRootDirectoryCreationInfo;

DataAwsccEfsAccessPointRootDirectoryCreationInfo.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEfsAccessPointAccessPointTagsList <a name="DataAwsccEfsAccessPointAccessPointTagsList" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointAccessPointTagsList;

new DataAwsccEfsAccessPointAccessPointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.get"></a>

```java
public DataAwsccEfsAccessPointAccessPointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEfsAccessPointAccessPointTagsOutputReference <a name="DataAwsccEfsAccessPointAccessPointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointAccessPointTagsOutputReference;

new DataAwsccEfsAccessPointAccessPointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags">DataAwsccEfsAccessPointAccessPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEfsAccessPointAccessPointTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointAccessPointTags">DataAwsccEfsAccessPointAccessPointTags</a>

---


### DataAwsccEfsAccessPointPosixUserOutputReference <a name="DataAwsccEfsAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointPosixUserOutputReference;

new DataAwsccEfsAccessPointPosixUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser">DataAwsccEfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.gid"></a>

```java
public java.lang.String getGid();
```

- *Type:* java.lang.String

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```java
public java.util.List<java.lang.String> getSecondaryGids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```java
public DataAwsccEfsAccessPointPosixUser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointPosixUser">DataAwsccEfsAccessPointPosixUser</a>

---


### DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference <a name="DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference;

new DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">ownerGid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">ownerUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo">DataAwsccEfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```java
public java.lang.String getOwnerGid();
```

- *Type:* java.lang.String

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```java
public java.lang.String getOwnerUid();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccEfsAccessPointRootDirectoryCreationInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfo">DataAwsccEfsAccessPointRootDirectoryCreationInfo</a>

---


### DataAwsccEfsAccessPointRootDirectoryOutputReference <a name="DataAwsccEfsAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_efs_access_point.DataAwsccEfsAccessPointRootDirectoryOutputReference;

new DataAwsccEfsAccessPointRootDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationInfo">creationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference">DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory">DataAwsccEfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creationInfo`<sup>Required</sup> <a name="creationInfo" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```java
public DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference getCreationInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference">DataAwsccEfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```java
public DataAwsccEfsAccessPointRootDirectory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsAccessPoint.DataAwsccEfsAccessPointRootDirectory">DataAwsccEfsAccessPointRootDirectory</a>

---



