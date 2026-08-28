# `dataAwsccElasticbeanstalkApplication` Submodule <a name="`dataAwsccElasticbeanstalkApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkApplication <a name="DataAwsccElasticbeanstalkApplication" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_application awscc_elasticbeanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplication;

DataAwsccElasticbeanstalkApplication.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_application#id DataAwsccElasticbeanstalkApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplication;

DataAwsccElasticbeanstalkApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplication;

DataAwsccElasticbeanstalkApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplication;

DataAwsccElasticbeanstalkApplication.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplication;

DataAwsccElasticbeanstalkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccElasticbeanstalkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccElasticbeanstalkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccElasticbeanstalkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.resourceLifecycleConfig">resourceLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `resourceLifecycleConfig`<sup>Required</sup> <a name="resourceLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.resourceLifecycleConfig"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference getResourceLifecycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkApplicationConfig <a name="DataAwsccElasticbeanstalkApplicationConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationConfig;

DataAwsccElasticbeanstalkApplicationConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_application#id DataAwsccElasticbeanstalkApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig;

DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig.builder()
    .build();
```


### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig;

DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.builder()
    .build();
```


### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule;

DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.builder()
    .build();
```


### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule;

DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference;

new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig">versionLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `versionLifecycleConfig`<sup>Required</sup> <a name="versionLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference getVersionLifecycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig</a>

---


### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference;

new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays">maxAgeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteSourceFromS3`<sup>Required</sup> <a name="deleteSourceFromS3" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3"></a>

```java
public IResolvable getDeleteSourceFromS3();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxAgeInDays`<sup>Required</sup> <a name="maxAgeInDays" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays"></a>

```java
public java.lang.Number getMaxAgeInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---


### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference;

new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteSourceFromS3`<sup>Required</sup> <a name="deleteSourceFromS3" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3"></a>

```java
public IResolvable getDeleteSourceFromS3();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---


### DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference <a name="DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticbeanstalk_application.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference;

new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule">maxAgeRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule">maxCountRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeRule`<sup>Required</sup> <a name="maxAgeRule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference getMaxAgeRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a>

---

##### `maxCountRule`<sup>Required</sup> <a name="maxCountRule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference getMaxCountRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplication.DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---



