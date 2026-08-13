# `dataAwsccLambdaCodeSigningConfig` Submodule <a name="`dataAwsccLambdaCodeSigningConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaCodeSigningConfig <a name="DataAwsccLambdaCodeSigningConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config awscc_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfig;

DataAwsccLambdaCodeSigningConfig.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config#id DataAwsccLambdaCodeSigningConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfig;

DataAwsccLambdaCodeSigningConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfig;

DataAwsccLambdaCodeSigningConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfig;

DataAwsccLambdaCodeSigningConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfig;

DataAwsccLambdaCodeSigningConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccLambdaCodeSigningConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccLambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccLambdaCodeSigningConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccLambdaCodeSigningConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaCodeSigningConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference">DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigId">codeSigningConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningPolicies">codeSigningPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference">DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList">DataAwsccLambdaCodeSigningConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.allowedPublishers"></a>

```java
public DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference getAllowedPublishers();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference">DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="codeSigningConfigArn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigArn"></a>

```java
public java.lang.String getCodeSigningConfigArn();
```

- *Type:* java.lang.String

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="codeSigningConfigId" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigId"></a>

```java
public java.lang.String getCodeSigningConfigId();
```

- *Type:* java.lang.String

---

##### `codeSigningPolicies`<sup>Required</sup> <a name="codeSigningPolicies" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningPolicies"></a>

```java
public DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference getCodeSigningPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference">DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tags"></a>

```java
public DataAwsccLambdaCodeSigningConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList">DataAwsccLambdaCodeSigningConfigTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaCodeSigningConfigAllowedPublishers <a name="DataAwsccLambdaCodeSigningConfigAllowedPublishers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigAllowedPublishers;

DataAwsccLambdaCodeSigningConfigAllowedPublishers.builder()
    .build();
```


### DataAwsccLambdaCodeSigningConfigCodeSigningPolicies <a name="DataAwsccLambdaCodeSigningConfigCodeSigningPolicies" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies;

DataAwsccLambdaCodeSigningConfigCodeSigningPolicies.builder()
    .build();
```


### DataAwsccLambdaCodeSigningConfigConfig <a name="DataAwsccLambdaCodeSigningConfigConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigConfig;

DataAwsccLambdaCodeSigningConfigConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config#id DataAwsccLambdaCodeSigningConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaCodeSigningConfigTags <a name="DataAwsccLambdaCodeSigningConfigTags" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigTags;

DataAwsccLambdaCodeSigningConfigTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference <a name="DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference;

new DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers">DataAwsccLambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```java
public java.util.List<java.lang.String> getSigningProfileVersionArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaCodeSigningConfigAllowedPublishers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers">DataAwsccLambdaCodeSigningConfigAllowedPublishers</a>

---


### DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference <a name="DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference;

new DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies">DataAwsccLambdaCodeSigningConfigCodeSigningPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="untrustedArtifactOnDeployment" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```java
public java.lang.String getUntrustedArtifactOnDeployment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaCodeSigningConfigCodeSigningPolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies">DataAwsccLambdaCodeSigningConfigCodeSigningPolicies</a>

---


### DataAwsccLambdaCodeSigningConfigTagsList <a name="DataAwsccLambdaCodeSigningConfigTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigTagsList;

new DataAwsccLambdaCodeSigningConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.get"></a>

```java
public DataAwsccLambdaCodeSigningConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccLambdaCodeSigningConfigTagsOutputReference <a name="DataAwsccLambdaCodeSigningConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_lambda_code_signing_config.DataAwsccLambdaCodeSigningConfigTagsOutputReference;

new DataAwsccLambdaCodeSigningConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags">DataAwsccLambdaCodeSigningConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccLambdaCodeSigningConfigTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags">DataAwsccLambdaCodeSigningConfigTags</a>

---



