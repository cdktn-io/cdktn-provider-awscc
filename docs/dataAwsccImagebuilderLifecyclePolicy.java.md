# `dataAwsccImagebuilderLifecyclePolicy` Submodule <a name="`dataAwsccImagebuilderLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderLifecyclePolicy <a name="DataAwsccImagebuilderLifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicy;

DataAwsccImagebuilderLifecyclePolicy.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/imagebuilder_lifecycle_policy#id DataAwsccImagebuilderLifecyclePolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicy;

DataAwsccImagebuilderLifecyclePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicy;

DataAwsccImagebuilderLifecyclePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicy;

DataAwsccImagebuilderLifecyclePolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicy;

DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccImagebuilderLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.policyDetails">policyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference">DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.policyDetails"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList getPolicyDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList</a>

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference getResourceSelection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference">DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderLifecyclePolicyConfig <a name="DataAwsccImagebuilderLifecyclePolicyConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyConfig;

DataAwsccImagebuilderLifecyclePolicyConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/imagebuilder_lifecycle_policy#id DataAwsccImagebuilderLifecyclePolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderLifecyclePolicyPolicyDetails <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetails;

DataAwsccImagebuilderLifecyclePolicyPolicyDetails.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction;

DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources;

DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules;

DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis;

DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched;

DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter;

DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyResourceSelection <a name="DataAwsccImagebuilderLifecyclePolicyResourceSelection" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyResourceSelection;

DataAwsccImagebuilderLifecyclePolicyResourceSelection.builder()
    .build();
```


### DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes <a name="DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes;

DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis">amis</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers">containers</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots">snapshots</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis"></a>

```java
public IResolvable getAmis();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers"></a>

```java
public IResolvable getContainers();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots"></a>

```java
public IResolvable getSnapshots();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources">includeResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeResources`<sup>Required</sup> <a name="includeResources" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference getIncludeResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic">isPublic</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap">tagMap</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic"></a>

```java
public IResolvable getIsPublic();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastLaunched`<sup>Required</sup> <a name="lastLaunched" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference getLastLaunched();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap"></a>

```java
public StringMap getTagMap();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap">tagMap</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference getAmis();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap"></a>

```java
public StringMap getTagMap();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast">retainAtLeast</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retainAtLeast`<sup>Required</sup> <a name="retainAtLeast" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast"></a>

```java
public java.lang.Number getRetainAtLeast();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.get"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference;

new DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetails">DataAwsccImagebuilderLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `exclusionRules`<sup>Required</sup> <a name="exclusionRules" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference getExclusionRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">DataAwsccImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyPolicyDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyPolicyDetails">DataAwsccImagebuilderLifecyclePolicyPolicyDetails</a>

---


### DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference;

new DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes">recipes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList">DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">tagMap</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelection">DataAwsccImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recipes`<sup>Required</sup> <a name="recipes" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList getRecipes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList">DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList</a>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```java
public StringMap getTagMap();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyResourceSelection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelection">DataAwsccImagebuilderLifecyclePolicyResourceSelection</a>

---


### DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList <a name="DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList;

new DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.get"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference <a name="DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_imagebuilder_lifecycle_policy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference;

new DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes">DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue"></a>

```java
public DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderLifecyclePolicy.DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes">DataAwsccImagebuilderLifecyclePolicyResourceSelectionRecipes</a>

---



