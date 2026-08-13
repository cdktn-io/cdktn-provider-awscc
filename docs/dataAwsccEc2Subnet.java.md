# `dataAwsccEc2Subnet` Submodule <a name="`dataAwsccEc2Subnet` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Subnet <a name="DataAwsccEc2Subnet" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_subnet awscc_ec2_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2Subnet;

DataAwsccEc2Subnet.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_subnet#id DataAwsccEc2Subnet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2Subnet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2Subnet;

DataAwsccEc2Subnet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2Subnet;

DataAwsccEc2Subnet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2Subnet;

DataAwsccEc2Subnet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2Subnet;

DataAwsccEc2Subnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEc2Subnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEc2Subnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEc2Subnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEc2Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.blockPublicAccessStates">blockPublicAccessStates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference">DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.enableDns64">enableDns64</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.enableLniAtDeviceIndex">enableLniAtDeviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6Native">ipv6Native</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.networkAclAssociationId">networkAclAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.privateDnsNameOptionsOnLaunch">privateDnsNameOptionsOnLaunch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference">DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList">DataAwsccEc2SubnetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `assignIpv6AddressOnCreation`<sup>Required</sup> <a name="assignIpv6AddressOnCreation" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.assignIpv6AddressOnCreation"></a>

```java
public IResolvable getAssignIpv6AddressOnCreation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `blockPublicAccessStates`<sup>Required</sup> <a name="blockPublicAccessStates" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.blockPublicAccessStates"></a>

```java
public DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference getBlockPublicAccessStates();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference">DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference</a>

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `enableDns64`<sup>Required</sup> <a name="enableDns64" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.enableDns64"></a>

```java
public IResolvable getEnableDns64();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableLniAtDeviceIndex`<sup>Required</sup> <a name="enableLniAtDeviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.enableLniAtDeviceIndex"></a>

```java
public java.lang.Number getEnableLniAtDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv4IpamPoolId"></a>

```java
public java.lang.String getIpv4IpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipv4NetmaskLength`<sup>Required</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv4NetmaskLength"></a>

```java
public java.lang.Number getIpv4NetmaskLength();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipv6Native`<sup>Required</sup> <a name="ipv6Native" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6Native"></a>

```java
public IResolvable getIpv6Native();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

---

##### `mapPublicIpOnLaunch`<sup>Required</sup> <a name="mapPublicIpOnLaunch" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.mapPublicIpOnLaunch"></a>

```java
public IResolvable getMapPublicIpOnLaunch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `networkAclAssociationId`<sup>Required</sup> <a name="networkAclAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.networkAclAssociationId"></a>

```java
public java.lang.String getNetworkAclAssociationId();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `privateDnsNameOptionsOnLaunch`<sup>Required</sup> <a name="privateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.privateDnsNameOptionsOnLaunch"></a>

```java
public DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference getPrivateDnsNameOptionsOnLaunch();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference">DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference</a>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.tags"></a>

```java
public DataAwsccEc2SubnetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList">DataAwsccEc2SubnetTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2Subnet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2SubnetBlockPublicAccessStates <a name="DataAwsccEc2SubnetBlockPublicAccessStates" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStates.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetBlockPublicAccessStates;

DataAwsccEc2SubnetBlockPublicAccessStates.builder()
    .build();
```


### DataAwsccEc2SubnetConfig <a name="DataAwsccEc2SubnetConfig" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetConfig;

DataAwsccEc2SubnetConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_subnet#id DataAwsccEc2Subnet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch <a name="DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch;

DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch.builder()
    .build();
```


### DataAwsccEc2SubnetTags <a name="DataAwsccEc2SubnetTags" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetTags;

DataAwsccEc2SubnetTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference <a name="DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference;

new DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.internetGatewayBlockMode">internetGatewayBlockMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStates">DataAwsccEc2SubnetBlockPublicAccessStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internetGatewayBlockMode`<sup>Required</sup> <a name="internetGatewayBlockMode" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.internetGatewayBlockMode"></a>

```java
public java.lang.String getInternetGatewayBlockMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStatesOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2SubnetBlockPublicAccessStates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetBlockPublicAccessStates">DataAwsccEc2SubnetBlockPublicAccessStates</a>

---


### DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference <a name="DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference;

new DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch">DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```java
public IResolvable getEnableResourceNameDnsAaaaRecord();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.enableResourceNameDnsARecord"></a>

```java
public IResolvable getEnableResourceNameDnsARecord();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunchOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch">DataAwsccEc2SubnetPrivateDnsNameOptionsOnLaunch</a>

---


### DataAwsccEc2SubnetTagsList <a name="DataAwsccEc2SubnetTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetTagsList;

new DataAwsccEc2SubnetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.get"></a>

```java
public DataAwsccEc2SubnetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEc2SubnetTagsOutputReference <a name="DataAwsccEc2SubnetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_subnet.DataAwsccEc2SubnetTagsOutputReference;

new DataAwsccEc2SubnetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTags">DataAwsccEc2SubnetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2SubnetTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Subnet.DataAwsccEc2SubnetTags">DataAwsccEc2SubnetTags</a>

---



