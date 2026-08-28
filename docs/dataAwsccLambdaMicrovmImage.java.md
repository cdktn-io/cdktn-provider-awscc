# `dataAwsccLambdaMicrovmImage` Submodule <a name="`dataAwsccLambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaMicrovmImage <a name="DataAwsccLambdaMicrovmImage" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImage;

DataAwsccLambdaMicrovmImage.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image#id DataAwsccLambdaMicrovmImage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImage;

DataAwsccLambdaMicrovmImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImage;

DataAwsccLambdaMicrovmImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImage;

DataAwsccLambdaMicrovmImage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImage;

DataAwsccLambdaMicrovmImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccLambdaMicrovmImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccLambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccLambdaMicrovmImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccLambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageVersion">baseImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.buildRoleArn">buildRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference">DataAwsccLambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cpuConfigurations">cpuConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList">DataAwsccLambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList">DataAwsccLambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestActiveImageVersion">latestActiveImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestFailedImageVersion">latestFailedImageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference">DataAwsccLambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList">DataAwsccLambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList">DataAwsccLambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.additionalOsCapabilities"></a>

```java
public java.util.List<java.lang.String> getAdditionalOsCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageVersion"></a>

```java
public java.lang.String getBaseImageVersion();
```

- *Type:* java.lang.String

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.buildRoleArn"></a>

```java
public java.lang.String getBuildRoleArn();
```

- *Type:* java.lang.String

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.codeArtifact"></a>

```java
public DataAwsccLambdaMicrovmImageCodeArtifactOutputReference getCodeArtifact();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference">DataAwsccLambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `cpuConfigurations`<sup>Required</sup> <a name="cpuConfigurations" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cpuConfigurations"></a>

```java
public DataAwsccLambdaMicrovmImageCpuConfigurationsList getCpuConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList">DataAwsccLambdaMicrovmImageCpuConfigurationsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.environmentVariables"></a>

```java
public DataAwsccLambdaMicrovmImageEnvironmentVariablesList getEnvironmentVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList">DataAwsccLambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.hooks"></a>

```java
public DataAwsccLambdaMicrovmImageHooksOutputReference getHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksOutputReference</a>

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `latestActiveImageVersion`<sup>Required</sup> <a name="latestActiveImageVersion" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestActiveImageVersion"></a>

```java
public java.lang.String getLatestActiveImageVersion();
```

- *Type:* java.lang.String

---

##### `latestFailedImageVersion`<sup>Required</sup> <a name="latestFailedImageVersion" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestFailedImageVersion"></a>

```java
public java.lang.String getLatestFailedImageVersion();
```

- *Type:* java.lang.String

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.logging"></a>

```java
public DataAwsccLambdaMicrovmImageLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference">DataAwsccLambdaMicrovmImageLoggingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.resources"></a>

```java
public DataAwsccLambdaMicrovmImageResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList">DataAwsccLambdaMicrovmImageResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tags"></a>

```java
public DataAwsccLambdaMicrovmImageTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList">DataAwsccLambdaMicrovmImageTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaMicrovmImageCodeArtifact <a name="DataAwsccLambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageCodeArtifact;

DataAwsccLambdaMicrovmImageCodeArtifact.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageConfig <a name="DataAwsccLambdaMicrovmImageConfig" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageConfig;

DataAwsccLambdaMicrovmImageConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image#id DataAwsccLambdaMicrovmImage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaMicrovmImageCpuConfigurations <a name="DataAwsccLambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageCpuConfigurations;

DataAwsccLambdaMicrovmImageCpuConfigurations.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageEnvironmentVariables <a name="DataAwsccLambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageEnvironmentVariables;

DataAwsccLambdaMicrovmImageEnvironmentVariables.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageHooks <a name="DataAwsccLambdaMicrovmImageHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageHooks;

DataAwsccLambdaMicrovmImageHooks.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageHooksMicrovmHooks <a name="DataAwsccLambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageHooksMicrovmHooks;

DataAwsccLambdaMicrovmImageHooksMicrovmHooks.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks <a name="DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks;

DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageLogging <a name="DataAwsccLambdaMicrovmImageLogging" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageLogging;

DataAwsccLambdaMicrovmImageLogging.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageLoggingCloudwatch <a name="DataAwsccLambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageLoggingCloudwatch;

DataAwsccLambdaMicrovmImageLoggingCloudwatch.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageResources <a name="DataAwsccLambdaMicrovmImageResources" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageResources;

DataAwsccLambdaMicrovmImageResources.builder()
    .build();
```


### DataAwsccLambdaMicrovmImageTags <a name="DataAwsccLambdaMicrovmImageTags" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageTags;

DataAwsccLambdaMicrovmImageTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaMicrovmImageCodeArtifactOutputReference <a name="DataAwsccLambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference;

new DataAwsccLambdaMicrovmImageCodeArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact">DataAwsccLambdaMicrovmImageCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageCodeArtifact getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact">DataAwsccLambdaMicrovmImageCodeArtifact</a>

---


### DataAwsccLambdaMicrovmImageCpuConfigurationsList <a name="DataAwsccLambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageCpuConfigurationsList;

new DataAwsccLambdaMicrovmImageCpuConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.get"></a>

```java
public DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference <a name="DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference;

new DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations">DataAwsccLambdaMicrovmImageCpuConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageCpuConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations">DataAwsccLambdaMicrovmImageCpuConfigurations</a>

---


### DataAwsccLambdaMicrovmImageEnvironmentVariablesList <a name="DataAwsccLambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageEnvironmentVariablesList;

new DataAwsccLambdaMicrovmImageEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.get"></a>

```java
public DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference <a name="DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference;

new DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables">DataAwsccLambdaMicrovmImageEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageEnvironmentVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables">DataAwsccLambdaMicrovmImageEnvironmentVariables</a>

---


### DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference;

new DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks">DataAwsccLambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```java
public java.lang.String getResume();
```

- *Type:* java.lang.String

---

##### `resumeTimeoutInSeconds`<sup>Required</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```java
public java.lang.Number getResumeTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

---

##### `runTimeoutInSeconds`<sup>Required</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```java
public java.lang.Number getRunTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```java
public java.lang.String getSuspend();
```

- *Type:* java.lang.String

---

##### `suspendTimeoutInSeconds`<sup>Required</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```java
public java.lang.Number getSuspendTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```java
public java.lang.String getTerminate();
```

- *Type:* java.lang.String

---

##### `terminateTimeoutInSeconds`<sup>Required</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```java
public java.lang.Number getTerminateTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageHooksMicrovmHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks">DataAwsccLambdaMicrovmImageHooksMicrovmHooks</a>

---


### DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference;

new DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```java
public java.lang.String getReady();
```

- *Type:* java.lang.String

---

##### `readyTimeoutInSeconds`<sup>Required</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```java
public java.lang.Number getReadyTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

---

##### `validateTimeoutInSeconds`<sup>Required</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```java
public java.lang.Number getValidateTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks</a>

---


### DataAwsccLambdaMicrovmImageHooksOutputReference <a name="DataAwsccLambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageHooksOutputReference;

new DataAwsccLambdaMicrovmImageHooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `microvmHooks`<sup>Required</sup> <a name="microvmHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```java
public DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference getMicrovmHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `microvmImageHooks`<sup>Required</sup> <a name="microvmImageHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```java
public DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference getMicrovmImageHooks();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageHooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooks</a>

---


### DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference <a name="DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference;

new DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch">DataAwsccLambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```java
public java.lang.String getLogStream();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageLoggingCloudwatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch">DataAwsccLambdaMicrovmImageLoggingCloudwatch</a>

---


### DataAwsccLambdaMicrovmImageLoggingOutputReference <a name="DataAwsccLambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageLoggingOutputReference;

new DataAwsccLambdaMicrovmImageLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference">DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.disabled">disabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging">DataAwsccLambdaMicrovmImageLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```java
public DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference">DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageLogging getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging">DataAwsccLambdaMicrovmImageLogging</a>

---


### DataAwsccLambdaMicrovmImageResourcesList <a name="DataAwsccLambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageResourcesList;

new DataAwsccLambdaMicrovmImageResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.get"></a>

```java
public DataAwsccLambdaMicrovmImageResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccLambdaMicrovmImageResourcesOutputReference <a name="DataAwsccLambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageResourcesOutputReference;

new DataAwsccLambdaMicrovmImageResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">minimumMemoryInMiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources">DataAwsccLambdaMicrovmImageResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumMemoryInMiB`<sup>Required</sup> <a name="minimumMemoryInMiB" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```java
public java.lang.Number getMinimumMemoryInMiB();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageResources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources">DataAwsccLambdaMicrovmImageResources</a>

---


### DataAwsccLambdaMicrovmImageTagsList <a name="DataAwsccLambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageTagsList;

new DataAwsccLambdaMicrovmImageTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.get"></a>

```java
public DataAwsccLambdaMicrovmImageTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccLambdaMicrovmImageTagsOutputReference <a name="DataAwsccLambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_microvm_image.DataAwsccLambdaMicrovmImageTagsOutputReference;

new DataAwsccLambdaMicrovmImageTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags">DataAwsccLambdaMicrovmImageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaMicrovmImageTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags">DataAwsccLambdaMicrovmImageTags</a>

---



