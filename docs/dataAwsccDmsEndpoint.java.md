# `dataAwsccDmsEndpoint` Submodule <a name="`dataAwsccDmsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsEndpoint <a name="DataAwsccDmsEndpoint" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpoint;

DataAwsccDmsEndpoint.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpoint;

DataAwsccDmsEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpoint;

DataAwsccDmsEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpoint;

DataAwsccDmsEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpoint;

DataAwsccDmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccDmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccDmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccDmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName">engineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `docDbSettings`<sup>Required</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings"></a>

```java
public DataAwsccDmsEndpointDocDbSettingsOutputReference getDocDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a>

---

##### `dynamoDbSettings`<sup>Required</sup> <a name="dynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings"></a>

```java
public DataAwsccDmsEndpointDynamoDbSettingsOutputReference getDynamoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings"></a>

```java
public DataAwsccDmsEndpointElasticsearchSettingsOutputReference getElasticsearchSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `endpointIdentifier`<sup>Required</sup> <a name="endpointIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier"></a>

```java
public java.lang.String getEndpointIdentifier();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

---

##### `gcpMySqlSettings`<sup>Required</sup> <a name="gcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings"></a>

```java
public DataAwsccDmsEndpointGcpMySqlSettingsOutputReference getGcpMySqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `ibmDb2Settings`<sup>Required</sup> <a name="ibmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings"></a>

```java
public DataAwsccDmsEndpointIbmDb2SettingsOutputReference getIbmDb2Settings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings"></a>

```java
public DataAwsccDmsEndpointKafkaSettingsOutputReference getKafkaSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings"></a>

```java
public DataAwsccDmsEndpointKinesisSettingsOutputReference getKinesisSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings"></a>

```java
public DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference getMicrosoftSqlServerSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `mongoDbSettings`<sup>Required</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings"></a>

```java
public DataAwsccDmsEndpointMongoDbSettingsOutputReference getMongoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a>

---

##### `mySqlSettings`<sup>Required</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings"></a>

```java
public DataAwsccDmsEndpointMySqlSettingsOutputReference getMySqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a>

---

##### `neptuneSettings`<sup>Required</sup> <a name="neptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings"></a>

```java
public DataAwsccDmsEndpointNeptuneSettingsOutputReference getNeptuneSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings"></a>

```java
public DataAwsccDmsEndpointOracleSettingsOutputReference getOracleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings"></a>

```java
public DataAwsccDmsEndpointPostgreSqlSettingsOutputReference getPostgreSqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `redisSettings`<sup>Required</sup> <a name="redisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings"></a>

```java
public DataAwsccDmsEndpointRedisSettingsOutputReference getRedisSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings"></a>

```java
public DataAwsccDmsEndpointRedshiftSettingsOutputReference getRedshiftSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `s3Settings`<sup>Required</sup> <a name="s3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings"></a>

```java
public DataAwsccDmsEndpointS3SettingsOutputReference getS3Settings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a>

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `sybaseSettings`<sup>Required</sup> <a name="sybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings"></a>

```java
public DataAwsccDmsEndpointSybaseSettingsOutputReference getSybaseSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags"></a>

```java
public DataAwsccDmsEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsEndpointConfig <a name="DataAwsccDmsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointConfig;

DataAwsccDmsEndpointConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsEndpointDocDbSettings <a name="DataAwsccDmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointDocDbSettings;

DataAwsccDmsEndpointDocDbSettings.builder()
    .build();
```


### DataAwsccDmsEndpointDynamoDbSettings <a name="DataAwsccDmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointDynamoDbSettings;

DataAwsccDmsEndpointDynamoDbSettings.builder()
    .build();
```


### DataAwsccDmsEndpointElasticsearchSettings <a name="DataAwsccDmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointElasticsearchSettings;

DataAwsccDmsEndpointElasticsearchSettings.builder()
    .build();
```


### DataAwsccDmsEndpointGcpMySqlSettings <a name="DataAwsccDmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointGcpMySqlSettings;

DataAwsccDmsEndpointGcpMySqlSettings.builder()
    .build();
```


### DataAwsccDmsEndpointIbmDb2Settings <a name="DataAwsccDmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointIbmDb2Settings;

DataAwsccDmsEndpointIbmDb2Settings.builder()
    .build();
```


### DataAwsccDmsEndpointKafkaSettings <a name="DataAwsccDmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointKafkaSettings;

DataAwsccDmsEndpointKafkaSettings.builder()
    .build();
```


### DataAwsccDmsEndpointKinesisSettings <a name="DataAwsccDmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointKinesisSettings;

DataAwsccDmsEndpointKinesisSettings.builder()
    .build();
```


### DataAwsccDmsEndpointMicrosoftSqlServerSettings <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings;

DataAwsccDmsEndpointMicrosoftSqlServerSettings.builder()
    .build();
```


### DataAwsccDmsEndpointMongoDbSettings <a name="DataAwsccDmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointMongoDbSettings;

DataAwsccDmsEndpointMongoDbSettings.builder()
    .build();
```


### DataAwsccDmsEndpointMySqlSettings <a name="DataAwsccDmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointMySqlSettings;

DataAwsccDmsEndpointMySqlSettings.builder()
    .build();
```


### DataAwsccDmsEndpointNeptuneSettings <a name="DataAwsccDmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointNeptuneSettings;

DataAwsccDmsEndpointNeptuneSettings.builder()
    .build();
```


### DataAwsccDmsEndpointOracleSettings <a name="DataAwsccDmsEndpointOracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointOracleSettings;

DataAwsccDmsEndpointOracleSettings.builder()
    .build();
```


### DataAwsccDmsEndpointPostgreSqlSettings <a name="DataAwsccDmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointPostgreSqlSettings;

DataAwsccDmsEndpointPostgreSqlSettings.builder()
    .build();
```


### DataAwsccDmsEndpointRedisSettings <a name="DataAwsccDmsEndpointRedisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointRedisSettings;

DataAwsccDmsEndpointRedisSettings.builder()
    .build();
```


### DataAwsccDmsEndpointRedshiftSettings <a name="DataAwsccDmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointRedshiftSettings;

DataAwsccDmsEndpointRedshiftSettings.builder()
    .build();
```


### DataAwsccDmsEndpointS3Settings <a name="DataAwsccDmsEndpointS3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointS3Settings;

DataAwsccDmsEndpointS3Settings.builder()
    .build();
```


### DataAwsccDmsEndpointSybaseSettings <a name="DataAwsccDmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointSybaseSettings;

DataAwsccDmsEndpointSybaseSettings.builder()
    .build();
```


### DataAwsccDmsEndpointTags <a name="DataAwsccDmsEndpointTags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointTags;

DataAwsccDmsEndpointTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsEndpointDocDbSettingsOutputReference <a name="DataAwsccDmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference;

new DataAwsccDmsEndpointDocDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```java
public java.lang.Number getDocsToInvestigate();
```

- *Type:* java.lang.Number

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```java
public IResolvable getExtractDocId();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointDocDbSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a>

---


### DataAwsccDmsEndpointDynamoDbSettingsOutputReference <a name="DataAwsccDmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference;

new DataAwsccDmsEndpointDynamoDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointDynamoDbSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a>

---


### DataAwsccDmsEndpointElasticsearchSettingsOutputReference <a name="DataAwsccDmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference;

new DataAwsccDmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointElasticsearchSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a>

---


### DataAwsccDmsEndpointGcpMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference;

new DataAwsccDmsEndpointGcpMySqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```java
public IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointGcpMySqlSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a>

---


### DataAwsccDmsEndpointIbmDb2SettingsOutputReference <a name="DataAwsccDmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference;

new DataAwsccDmsEndpointIbmDb2SettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">currentLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">keepCsvFiles</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">loadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">maxKBytesPerRead</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">setDataCaptureChanges</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">writeBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentLsn`<sup>Required</sup> <a name="currentLsn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```java
public java.lang.String getCurrentLsn();
```

- *Type:* java.lang.String

---

##### `keepCsvFiles`<sup>Required</sup> <a name="keepCsvFiles" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```java
public IResolvable getKeepCsvFiles();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `loadTimeout`<sup>Required</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```java
public java.lang.Number getLoadTimeout();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `maxKBytesPerRead`<sup>Required</sup> <a name="maxKBytesPerRead" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```java
public java.lang.Number getMaxKBytesPerRead();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `setDataCaptureChanges`<sup>Required</sup> <a name="setDataCaptureChanges" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```java
public IResolvable getSetDataCaptureChanges();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `writeBufferSize`<sup>Required</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```java
public java.lang.Number getWriteBufferSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointIbmDb2Settings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a>

---


### DataAwsccDmsEndpointKafkaSettingsOutputReference <a name="DataAwsccDmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference;

new DataAwsccDmsEndpointKafkaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName">saslUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```java
public IResolvable getIncludeControlDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public IResolvable getIncludeNullAndEmpty();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```java
public IResolvable getIncludePartitionValue();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public IResolvable getIncludeTableAlterOperations();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public IResolvable getIncludeTransactionDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```java
public IResolvable getNoHexPrefix();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

---

##### `saslUserName`<sup>Required</sup> <a name="saslUserName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```java
public java.lang.String getSaslUserName();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointKafkaSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a>

---


### DataAwsccDmsEndpointKinesisSettingsOutputReference <a name="DataAwsccDmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference;

new DataAwsccDmsEndpointKinesisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```java
public IResolvable getIncludeControlDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public IResolvable getIncludeNullAndEmpty();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```java
public IResolvable getIncludePartitionValue();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public IResolvable getIncludeTableAlterOperations();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public IResolvable getIncludeTransactionDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```java
public IResolvable getNoHexPrefix();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointKinesisSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a>

---


### DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference;

new DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">bcpPacketSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">controlTablesFileGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">forceLobLookup</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">querySingleAlwaysOnNode</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">readBackupOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">safeguardPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">tlogAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">useBcpFullLoad</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">useThirdPartyBackupDevice</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bcpPacketSize`<sup>Required</sup> <a name="bcpPacketSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```java
public java.lang.Number getBcpPacketSize();
```

- *Type:* java.lang.Number

---

##### `controlTablesFileGroup`<sup>Required</sup> <a name="controlTablesFileGroup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```java
public java.lang.String getControlTablesFileGroup();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `forceLobLookup`<sup>Required</sup> <a name="forceLobLookup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```java
public IResolvable getForceLobLookup();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `querySingleAlwaysOnNode`<sup>Required</sup> <a name="querySingleAlwaysOnNode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```java
public IResolvable getQuerySingleAlwaysOnNode();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `readBackupOnly`<sup>Required</sup> <a name="readBackupOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```java
public IResolvable getReadBackupOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `safeguardPolicy`<sup>Required</sup> <a name="safeguardPolicy" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```java
public java.lang.String getSafeguardPolicy();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `tlogAccessMode`<sup>Required</sup> <a name="tlogAccessMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```java
public java.lang.String getTlogAccessMode();
```

- *Type:* java.lang.String

---

##### `trimSpaceInChar`<sup>Required</sup> <a name="trimSpaceInChar" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```java
public IResolvable getTrimSpaceInChar();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useBcpFullLoad`<sup>Required</sup> <a name="useBcpFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```java
public IResolvable getUseBcpFullLoad();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `useThirdPartyBackupDevice`<sup>Required</sup> <a name="useThirdPartyBackupDevice" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```java
public IResolvable getUseThirdPartyBackupDevice();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointMicrosoftSqlServerSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a>

---


### DataAwsccDmsEndpointMongoDbSettingsOutputReference <a name="DataAwsccDmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference;

new DataAwsccDmsEndpointMongoDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource">authSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointMongoDbSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a>

---


### DataAwsccDmsEndpointMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference;

new DataAwsccDmsEndpointMySqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType">targetDbType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```java
public IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

---

##### `targetDbType`<sup>Required</sup> <a name="targetDbType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```java
public java.lang.String getTargetDbType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointMySqlSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a>

---


### DataAwsccDmsEndpointNeptuneSettingsOutputReference <a name="DataAwsccDmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference;

new DataAwsccDmsEndpointNeptuneSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">s3BucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```java
public IResolvable getIamAuthEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `maxRetryCount`<sup>Required</sup> <a name="maxRetryCount" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

---

##### `s3BucketFolder`<sup>Required</sup> <a name="s3BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```java
public java.lang.String getS3BucketFolder();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointNeptuneSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a>

---


### DataAwsccDmsEndpointOracleSettingsOutputReference <a name="DataAwsccDmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointOracleSettingsOutputReference;

new DataAwsccDmsEndpointOracleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">allowSelectNestedTables</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">archivedLogDestId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword">asmPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser">asmUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">charLengthSemantics</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog">directPathNoLog</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">readAheadBlocks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">readTableSpaceName</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">replacePathPrefix</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">securityDbEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">standbyDelayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile">useBFile</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader">useLogminerReader</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix">usePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessAlternateDirectly`<sup>Required</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```java
public IResolvable getAccessAlternateDirectly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestId();
```

- *Type:* java.lang.Number

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="addSupplementalLogging" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```java
public IResolvable getAddSupplementalLogging();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allowSelectNestedTables`<sup>Required</sup> <a name="allowSelectNestedTables" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```java
public IResolvable getAllowSelectNestedTables();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `archivedLogDestId`<sup>Required</sup> <a name="archivedLogDestId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```java
public java.lang.Number getArchivedLogDestId();
```

- *Type:* java.lang.Number

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="archivedLogsOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```java
public IResolvable getArchivedLogsOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `asmPassword`<sup>Required</sup> <a name="asmPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```java
public java.lang.String getAsmPassword();
```

- *Type:* java.lang.String

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

---

##### `asmUser`<sup>Required</sup> <a name="asmUser" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```java
public java.lang.String getAsmUser();
```

- *Type:* java.lang.String

---

##### `charLengthSemantics`<sup>Required</sup> <a name="charLengthSemantics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```java
public java.lang.String getCharLengthSemantics();
```

- *Type:* java.lang.String

---

##### `directPathNoLog`<sup>Required</sup> <a name="directPathNoLog" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```java
public IResolvable getDirectPathNoLog();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="directPathParallelLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```java
public IResolvable getDirectPathParallelLoad();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```java
public IResolvable getEnableHomogenousTablespace();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `extraArchivedLogDestIds`<sup>Required</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```java
public IResolvable getFailTasksOnLobTruncation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="numberDatatypeScale" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```java
public java.lang.Number getNumberDatatypeScale();
```

- *Type:* java.lang.Number

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="oraclePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```java
public java.lang.String getOraclePathPrefix();
```

- *Type:* java.lang.String

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```java
public java.lang.Number getParallelAsmReadThreads();
```

- *Type:* java.lang.Number

---

##### `readAheadBlocks`<sup>Required</sup> <a name="readAheadBlocks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```java
public java.lang.Number getReadAheadBlocks();
```

- *Type:* java.lang.Number

---

##### `readTableSpaceName`<sup>Required</sup> <a name="readTableSpaceName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```java
public IResolvable getReadTableSpaceName();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `replacePathPrefix`<sup>Required</sup> <a name="replacePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```java
public IResolvable getReplacePathPrefix();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `retryInterval`<sup>Required</sup> <a name="retryInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `securityDbEncryption`<sup>Required</sup> <a name="securityDbEncryption" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```java
public java.lang.String getSecurityDbEncryption();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```java
public java.lang.String getSecurityDbEncryptionName();
```

- *Type:* java.lang.String

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionName();
```

- *Type:* java.lang.String

---

##### `standbyDelayTime`<sup>Required</sup> <a name="standbyDelayTime" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```java
public java.lang.Number getStandbyDelayTime();
```

- *Type:* java.lang.Number

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```java
public IResolvable getUseAlternateFolderForOnline();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useBFile`<sup>Required</sup> <a name="useBFile" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```java
public IResolvable getUseBFile();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useDirectPathFullLoad`<sup>Required</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```java
public IResolvable getUseDirectPathFullLoad();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useLogminerReader`<sup>Required</sup> <a name="useLogminerReader" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```java
public IResolvable getUseLogminerReader();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `usePathPrefix`<sup>Required</sup> <a name="usePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```java
public java.lang.String getUsePathPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointOracleSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a>

---


### DataAwsccDmsEndpointPostgreSqlSettingsOutputReference <a name="DataAwsccDmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference;

new DataAwsccDmsEndpointPostgreSqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">captureDdls</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">heartbeatEnable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName">slotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseName`<sup>Required</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

---

##### `captureDdls`<sup>Required</sup> <a name="captureDdls" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```java
public IResolvable getCaptureDdls();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `databaseMode`<sup>Required</sup> <a name="databaseMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

---

##### `executeTimeout`<sup>Required</sup> <a name="executeTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```java
public IResolvable getFailTasksOnLobTruncation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `heartbeatEnable`<sup>Required</sup> <a name="heartbeatEnable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```java
public IResolvable getHeartbeatEnable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `heartbeatFrequency`<sup>Required</sup> <a name="heartbeatFrequency" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchema`<sup>Required</sup> <a name="heartbeatSchema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```java
public IResolvable getMapBooleanAsBoolean();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointPostgreSqlSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a>

---


### DataAwsccDmsEndpointRedisSettingsOutputReference <a name="DataAwsccDmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointRedisSettingsOutputReference;

new DataAwsccDmsEndpointRedisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocol`<sup>Required</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointRedisSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a>

---


### DataAwsccDmsEndpointRedshiftSettingsOutputReference <a name="DataAwsccDmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference;

new DataAwsccDmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">acceptAnyDate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate">compUpdate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">emptyAsNull</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds">explicitIds</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">fileTransferUploadStreams</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">loadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">removeQuotes</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars">replaceChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">replaceInvalidChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">trimBlanks</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">truncateColumns</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">writeBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptAnyDate`<sup>Required</sup> <a name="acceptAnyDate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```java
public IResolvable getAcceptAnyDate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```java
public IResolvable getCaseSensitiveNames();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `compUpdate`<sup>Required</sup> <a name="compUpdate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```java
public IResolvable getCompUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `emptyAsNull`<sup>Required</sup> <a name="emptyAsNull" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```java
public IResolvable getEmptyAsNull();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `explicitIds`<sup>Required</sup> <a name="explicitIds" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```java
public IResolvable getExplicitIds();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `fileTransferUploadStreams`<sup>Required</sup> <a name="fileTransferUploadStreams" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```java
public java.lang.Number getFileTransferUploadStreams();
```

- *Type:* java.lang.Number

---

##### `loadTimeout`<sup>Required</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```java
public java.lang.Number getLoadTimeout();
```

- *Type:* java.lang.Number

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```java
public IResolvable getMapBooleanAsBoolean();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `removeQuotes`<sup>Required</sup> <a name="removeQuotes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```java
public IResolvable getRemoveQuotes();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `replaceChars`<sup>Required</sup> <a name="replaceChars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```java
public java.lang.String getReplaceChars();
```

- *Type:* java.lang.String

---

##### `replaceInvalidChars`<sup>Required</sup> <a name="replaceInvalidChars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```java
public java.lang.String getReplaceInvalidChars();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

---

##### `trimBlanks`<sup>Required</sup> <a name="trimBlanks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```java
public IResolvable getTrimBlanks();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `truncateColumns`<sup>Required</sup> <a name="truncateColumns" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```java
public IResolvable getTruncateColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `writeBufferSize`<sup>Required</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```java
public java.lang.Number getWriteBufferSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointRedshiftSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a>

---


### DataAwsccDmsEndpointS3SettingsOutputReference <a name="DataAwsccDmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointS3SettingsOutputReference;

new DataAwsccDmsEndpointS3SettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName">addColumnName</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath">cdcPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter">csvDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue">csvNoSupValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue">csvNullValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize">dataPageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence">datePartitionSequence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics">enableStatistics</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition">externalTableDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion">parquetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions">preserveTransactions</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180">rfc4180</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength">rowGroupLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName">timestampColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addColumnName`<sup>Required</sup> <a name="addColumnName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```java
public IResolvable getAddColumnName();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `addTrailingPaddingCharacter`<sup>Required</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```java
public IResolvable getAddTrailingPaddingCharacter();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `cannedAclForObjects`<sup>Required</sup> <a name="cannedAclForObjects" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```java
public java.lang.String getCannedAclForObjects();
```

- *Type:* java.lang.String

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```java
public IResolvable getCdcInsertsAndUpdates();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```java
public IResolvable getCdcInsertsOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `cdcMaxBatchInterval`<sup>Required</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```java
public java.lang.Number getCdcMaxBatchInterval();
```

- *Type:* java.lang.Number

---

##### `cdcMinFileSize`<sup>Required</sup> <a name="cdcMinFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```java
public java.lang.Number getCdcMinFileSize();
```

- *Type:* java.lang.Number

---

##### `cdcPath`<sup>Required</sup> <a name="cdcPath" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```java
public java.lang.String getCdcPath();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```java
public java.lang.String getCsvDelimiter();
```

- *Type:* java.lang.String

---

##### `csvNoSupValue`<sup>Required</sup> <a name="csvNoSupValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```java
public java.lang.String getCsvNoSupValue();
```

- *Type:* java.lang.String

---

##### `csvNullValue`<sup>Required</sup> <a name="csvNullValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```java
public java.lang.String getCsvNullValue();
```

- *Type:* java.lang.String

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```java
public java.lang.String getCsvRowDelimiter();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `dataPageSize`<sup>Required</sup> <a name="dataPageSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```java
public java.lang.Number getDataPageSize();
```

- *Type:* java.lang.Number

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```java
public java.lang.String getDatePartitionDelimiter();
```

- *Type:* java.lang.String

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```java
public IResolvable getDatePartitionEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `datePartitionSequence`<sup>Required</sup> <a name="datePartitionSequence" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```java
public java.lang.String getDatePartitionSequence();
```

- *Type:* java.lang.String

---

##### `datePartitionTimezone`<sup>Required</sup> <a name="datePartitionTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```java
public java.lang.String getDatePartitionTimezone();
```

- *Type:* java.lang.String

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```java
public java.lang.Number getDictPageSizeLimit();
```

- *Type:* java.lang.Number

---

##### `enableStatistics`<sup>Required</sup> <a name="enableStatistics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```java
public IResolvable getEnableStatistics();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```java
public java.lang.String getExternalTableDefinition();
```

- *Type:* java.lang.String

---

##### `glueCatalogGeneration`<sup>Required</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```java
public IResolvable getGlueCatalogGeneration();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ignoreHeaderRows`<sup>Required</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```java
public java.lang.Number getIgnoreHeaderRows();
```

- *Type:* java.lang.Number

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```java
public IResolvable getIncludeOpForFullLoad();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```java
public IResolvable getParquetTimestampInMillisecond();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```java
public java.lang.String getParquetVersion();
```

- *Type:* java.lang.String

---

##### `preserveTransactions`<sup>Required</sup> <a name="preserveTransactions" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```java
public IResolvable getPreserveTransactions();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```java
public IResolvable getRfc4180();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rowGroupLength`<sup>Required</sup> <a name="rowGroupLength" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```java
public java.lang.Number getRowGroupLength();
```

- *Type:* java.lang.Number

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `timestampColumnName`<sup>Required</sup> <a name="timestampColumnName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```java
public java.lang.String getTimestampColumnName();
```

- *Type:* java.lang.String

---

##### `useCsvNoSupValue`<sup>Required</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```java
public IResolvable getUseCsvNoSupValue();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```java
public IResolvable getUseTaskStartTimeForFullLoadTimestamp();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointS3Settings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a>

---


### DataAwsccDmsEndpointSybaseSettingsOutputReference <a name="DataAwsccDmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference;

new DataAwsccDmsEndpointSybaseSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointSybaseSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a>

---


### DataAwsccDmsEndpointTagsList <a name="DataAwsccDmsEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointTagsList;

new DataAwsccDmsEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get"></a>

```java
public DataAwsccDmsEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDmsEndpointTagsOutputReference <a name="DataAwsccDmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dms_endpoint.DataAwsccDmsEndpointTagsOutputReference;

new DataAwsccDmsEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccDmsEndpointTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a>

---



