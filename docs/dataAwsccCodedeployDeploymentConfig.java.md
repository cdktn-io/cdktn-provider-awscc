# `dataAwsccCodedeployDeploymentConfig` Submodule <a name="`dataAwsccCodedeployDeploymentConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodedeployDeploymentConfig <a name="DataAwsccCodedeployDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config awscc_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfig;

DataAwsccCodedeployDeploymentConfig.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config#id DataAwsccCodedeployDeploymentConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfig;

DataAwsccCodedeployDeploymentConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfig;

DataAwsccCodedeployDeploymentConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfig;

DataAwsccCodedeployDeploymentConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfig;

DataAwsccCodedeployDeploymentConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCodedeployDeploymentConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCodedeployDeploymentConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCodedeployDeploymentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodedeployDeploymentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference">DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.zonalConfig">zonalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

---

##### `minimumHealthyHosts`<sup>Required</sup> <a name="minimumHealthyHosts" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```java
public DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference getMinimumHealthyHosts();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference">DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `trafficRoutingConfig`<sup>Required</sup> <a name="trafficRoutingConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```java
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference getTrafficRoutingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `zonalConfig`<sup>Required</sup> <a name="zonalConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.zonalConfig"></a>

```java
public DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference getZonalConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodedeployDeploymentConfigConfig <a name="DataAwsccCodedeployDeploymentConfigConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigConfig;

DataAwsccCodedeployDeploymentConfigConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_config#id DataAwsccCodedeployDeploymentConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts <a name="DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts;

DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts.builder()
    .build();
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig;

DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig.builder()
    .build();
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;

DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.builder()
    .build();
```


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;

DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.builder()
    .build();
```


### DataAwsccCodedeployDeploymentConfigZonalConfig <a name="DataAwsccCodedeployDeploymentConfigZonalConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigZonalConfig;

DataAwsccCodedeployDeploymentConfigZonalConfig.builder()
    .build();
```


### DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone <a name="DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone;

DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference;

new DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts">DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```java
public DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts">DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeBasedCanary`<sup>Required</sup> <a name="timeBasedCanary" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```java
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference getTimeBasedCanary();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `timeBasedLinear`<sup>Required</sup> <a name="timeBasedLinear" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```java
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference getTimeBasedLinear();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval">canaryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage">canaryPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canaryInterval`<sup>Required</sup> <a name="canaryInterval" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval"></a>

```java
public java.lang.Number getCanaryInterval();
```

- *Type:* java.lang.Number

---

##### `canaryPercentage`<sup>Required</sup> <a name="canaryPercentage" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage"></a>

```java
public java.lang.Number getCanaryPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```java
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;

new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval">linearInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage">linearPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linearInterval`<sup>Required</sup> <a name="linearInterval" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval"></a>

```java
public java.lang.Number getLinearInterval();
```

- *Type:* java.lang.Number

---

##### `linearPercentage`<sup>Required</sup> <a name="linearPercentage" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage"></a>

```java
public java.lang.Number getLinearPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```java
public DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---


### DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference <a name="DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference;

new DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue"></a>

```java
public DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---


### DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference <a name="DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_codedeploy_deployment_config.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference;

new DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds">firstZoneMonitorDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone">minimumHealthyHostsPerZone</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds">monitorDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig">DataAwsccCodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firstZoneMonitorDurationInSeconds`<sup>Required</sup> <a name="firstZoneMonitorDurationInSeconds" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds"></a>

```java
public java.lang.Number getFirstZoneMonitorDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `minimumHealthyHostsPerZone`<sup>Required</sup> <a name="minimumHealthyHostsPerZone" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone"></a>

```java
public DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference getMinimumHealthyHostsPerZone();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a>

---

##### `monitorDurationInSeconds`<sup>Required</sup> <a name="monitorDurationInSeconds" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds"></a>

```java
public java.lang.Number getMonitorDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccCodedeployDeploymentConfigZonalConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentConfig.DataAwsccCodedeployDeploymentConfigZonalConfig">DataAwsccCodedeployDeploymentConfigZonalConfig</a>

---



