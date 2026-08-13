# `dataAwsccCloudformationLambdaHook` Submodule <a name="`dataAwsccCloudformationLambdaHook` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationLambdaHook <a name="DataAwsccCloudformationLambdaHook" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHook;

DataAwsccCloudformationLambdaHook.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook#id DataAwsccCloudformationLambdaHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHook;

DataAwsccCloudformationLambdaHook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHook;

DataAwsccCloudformationLambdaHook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHook;

DataAwsccCloudformationLambdaHook.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHook;

DataAwsccCloudformationLambdaHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudformationLambdaHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudformationLambdaHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudformationLambdaHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationLambdaHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.autoUpdate">autoUpdate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.failureMode">failureMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookArn">hookArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookStatus">hookStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lambdaFunction">lambdaFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference">DataAwsccCloudformationLambdaHookLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference">DataAwsccCloudformationLambdaHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference">DataAwsccCloudformationLambdaHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetOperations">targetOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.autoUpdate"></a>

```java
public IResolvable getAutoUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.failureMode"></a>

```java
public java.lang.String getFailureMode();
```

- *Type:* java.lang.String

---

##### `hookArn`<sup>Required</sup> <a name="hookArn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookArn"></a>

```java
public java.lang.String getHookArn();
```

- *Type:* java.lang.String

---

##### `hookStatus`<sup>Required</sup> <a name="hookStatus" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookStatus"></a>

```java
public java.lang.String getHookStatus();
```

- *Type:* java.lang.String

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lambdaFunction"></a>

```java
public java.lang.String getLambdaFunction();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.loggingConfig"></a>

```java
public DataAwsccCloudformationLambdaHookLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference">DataAwsccCloudformationLambdaHookLoggingConfigOutputReference</a>

---

##### `stackFilters`<sup>Required</sup> <a name="stackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.stackFilters"></a>

```java
public DataAwsccCloudformationLambdaHookStackFiltersOutputReference getStackFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference">DataAwsccCloudformationLambdaHookStackFiltersOutputReference</a>

---

##### `targetFilters`<sup>Required</sup> <a name="targetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetFilters"></a>

```java
public DataAwsccCloudformationLambdaHookTargetFiltersOutputReference getTargetFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference">DataAwsccCloudformationLambdaHookTargetFiltersOutputReference</a>

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetOperations"></a>

```java
public java.util.List<java.lang.String> getTargetOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationLambdaHookConfig <a name="DataAwsccCloudformationLambdaHookConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookConfig;

DataAwsccCloudformationLambdaHookConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook#id DataAwsccCloudformationLambdaHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationLambdaHookLoggingConfig <a name="DataAwsccCloudformationLambdaHookLoggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookLoggingConfig;

DataAwsccCloudformationLambdaHookLoggingConfig.builder()
    .build();
```


### DataAwsccCloudformationLambdaHookStackFilters <a name="DataAwsccCloudformationLambdaHookStackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookStackFilters;

DataAwsccCloudformationLambdaHookStackFilters.builder()
    .build();
```


### DataAwsccCloudformationLambdaHookStackFiltersStackNames <a name="DataAwsccCloudformationLambdaHookStackFiltersStackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookStackFiltersStackNames;

DataAwsccCloudformationLambdaHookStackFiltersStackNames.builder()
    .build();
```


### DataAwsccCloudformationLambdaHookStackFiltersStackRoles <a name="DataAwsccCloudformationLambdaHookStackFiltersStackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles;

DataAwsccCloudformationLambdaHookStackFiltersStackRoles.builder()
    .build();
```


### DataAwsccCloudformationLambdaHookTargetFilters <a name="DataAwsccCloudformationLambdaHookTargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookTargetFilters;

DataAwsccCloudformationLambdaHookTargetFilters.builder()
    .build();
```


### DataAwsccCloudformationLambdaHookTargetFiltersTargets <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookTargetFiltersTargets;

DataAwsccCloudformationLambdaHookTargetFiltersTargets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationLambdaHookLoggingConfigOutputReference <a name="DataAwsccCloudformationLambdaHookLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference;

new DataAwsccCloudformationLambdaHookLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn">logRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig">DataAwsccCloudformationLambdaHookLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logRoleArn`<sup>Required</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn"></a>

```java
public java.lang.String getLogRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationLambdaHookLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig">DataAwsccCloudformationLambdaHookLoggingConfig</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference;

new DataAwsccCloudformationLambdaHookStackFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria">filteringCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters">DataAwsccCloudformationLambdaHookStackFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filteringCriteria`<sup>Required</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria"></a>

```java
public java.lang.String getFilteringCriteria();
```

- *Type:* java.lang.String

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackNames"></a>

```java
public DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference getStackNames();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference</a>

---

##### `stackRoles`<sup>Required</sup> <a name="stackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackRoles"></a>

```java
public DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference getStackRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationLambdaHookStackFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters">DataAwsccCloudformationLambdaHookStackFilters</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference;

new DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames">DataAwsccCloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationLambdaHookStackFiltersStackNames getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames">DataAwsccCloudformationLambdaHookStackFiltersStackNames</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference;

new DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles">DataAwsccCloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationLambdaHookStackFiltersStackRoles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles">DataAwsccCloudformationLambdaHookStackFiltersStackRoles</a>

---


### DataAwsccCloudformationLambdaHookTargetFiltersOutputReference <a name="DataAwsccCloudformationLambdaHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference;

new DataAwsccCloudformationLambdaHookTargetFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints">invocationPoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targetNames">targetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList">DataAwsccCloudformationLambdaHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters">DataAwsccCloudformationLambdaHookTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invocationPoints`<sup>Required</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints"></a>

```java
public java.util.List<java.lang.String> getInvocationPoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNames`<sup>Required</sup> <a name="targetNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targetNames"></a>

```java
public java.util.List<java.lang.String> getTargetNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targets"></a>

```java
public DataAwsccCloudformationLambdaHookTargetFiltersTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList">DataAwsccCloudformationLambdaHookTargetFiltersTargetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationLambdaHookTargetFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters">DataAwsccCloudformationLambdaHookTargetFilters</a>

---


### DataAwsccCloudformationLambdaHookTargetFiltersTargetsList <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList;

new DataAwsccCloudformationLambdaHookTargetFiltersTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get"></a>

```java
public DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudformation_lambda_hook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference;

new DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocationPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets">DataAwsccCloudformationLambdaHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `invocationPoint`<sup>Required</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```java
public java.lang.String getInvocationPoint();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudformationLambdaHookTargetFiltersTargets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets">DataAwsccCloudformationLambdaHookTargetFiltersTargets</a>

---



