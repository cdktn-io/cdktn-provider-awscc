# `dataAwsccEksCapability` Submodule <a name="`dataAwsccEksCapability` Submodule" id="@cdktn/provider-awscc.dataAwsccEksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksCapability <a name="DataAwsccEksCapability" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_capability awscc_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapability;

DataAwsccEksCapability.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_capability#id DataAwsccEksCapability#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksCapability resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapability;

DataAwsccEksCapability.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapability;

DataAwsccEksCapability.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapability;

DataAwsccEksCapability.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapability;

DataAwsccEksCapability.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEksCapability.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEksCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEksCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.capabilityName">capabilityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference">DataAwsccEksCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.deletePropagationPolicy">deletePropagationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList">DataAwsccEksCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.capabilityName"></a>

```java
public java.lang.String getCapabilityName();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.configuration"></a>

```java
public DataAwsccEksCapabilityConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference">DataAwsccEksCapabilityConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletePropagationPolicy`<sup>Required</sup> <a name="deletePropagationPolicy" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.deletePropagationPolicy"></a>

```java
public java.lang.String getDeletePropagationPolicy();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tags"></a>

```java
public DataAwsccEksCapabilityTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList">DataAwsccEksCapabilityTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapability.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksCapabilityConfig <a name="DataAwsccEksCapabilityConfig" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfig;

DataAwsccEksCapabilityConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_capability#id DataAwsccEksCapability#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksCapabilityConfiguration <a name="DataAwsccEksCapabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfiguration;

DataAwsccEksCapabilityConfiguration.builder()
    .build();
```


### DataAwsccEksCapabilityConfigurationArgoCd <a name="DataAwsccEksCapabilityConfigurationArgoCd" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCd;

DataAwsccEksCapabilityConfigurationArgoCd.builder()
    .build();
```


### DataAwsccEksCapabilityConfigurationArgoCdAwsIdc <a name="DataAwsccEksCapabilityConfigurationArgoCdAwsIdc" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc;

DataAwsccEksCapabilityConfigurationArgoCdAwsIdc.builder()
    .build();
```


### DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess <a name="DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess;

DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess.builder()
    .build();
```


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings;

DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings.builder()
    .build();
```


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities;

DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.builder()
    .build();
```


### DataAwsccEksCapabilityTags <a name="DataAwsccEksCapabilityTags" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityTags;

DataAwsccEksCapabilityTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference;

new DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">idcRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc">DataAwsccEksCapabilityConfigurationArgoCdAwsIdc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```java
public java.lang.String getIdcManagedApplicationArn();
```

- *Type:* java.lang.String

---

##### `idcRegion`<sup>Required</sup> <a name="idcRegion" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```java
public java.lang.String getIdcRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdAwsIdc getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdc">DataAwsccEksCapabilityConfigurationArgoCdAwsIdc</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference;

new DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">vpceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```java
public java.util.List<java.lang.String> getVpceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccess</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference;

new DataAwsccEksCapabilityConfigurationArgoCdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">awsIdc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference">DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">networkAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings">rbacRoleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd">DataAwsccEksCapabilityConfigurationArgoCd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIdc`<sup>Required</sup> <a name="awsIdc" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference getAwsIdc();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference">DataAwsccEksCapabilityConfigurationArgoCdAwsIdcOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `networkAccess`<sup>Required</sup> <a name="networkAccess" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference getNetworkAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference">DataAwsccEksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a>

---

##### `rbacRoleMappings`<sup>Required</sup> <a name="rbacRoleMappings" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList getRbacRoleMappings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList</a>

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCd getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCd">DataAwsccEksCapabilityConfigurationArgoCd</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList;

new DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference;

new DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities</a>

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList;

new DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.get"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference <a name="DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference;

new DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities">identities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList getIdentities();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings">DataAwsccEksCapabilityConfigurationArgoCdRbacRoleMappings</a>

---


### DataAwsccEksCapabilityConfigurationOutputReference <a name="DataAwsccEksCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityConfigurationOutputReference;

new DataAwsccEksCapabilityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.argoCd">argoCd</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference">DataAwsccEksCapabilityConfigurationArgoCdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration">DataAwsccEksCapabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argoCd`<sup>Required</sup> <a name="argoCd" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.argoCd"></a>

```java
public DataAwsccEksCapabilityConfigurationArgoCdOutputReference getArgoCd();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationArgoCdOutputReference">DataAwsccEksCapabilityConfigurationArgoCdOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityConfiguration">DataAwsccEksCapabilityConfiguration</a>

---


### DataAwsccEksCapabilityTagsList <a name="DataAwsccEksCapabilityTagsList" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityTagsList;

new DataAwsccEksCapabilityTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.get"></a>

```java
public DataAwsccEksCapabilityTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEksCapabilityTagsOutputReference <a name="DataAwsccEksCapabilityTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_eks_capability.DataAwsccEksCapabilityTagsOutputReference;

new DataAwsccEksCapabilityTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags">DataAwsccEksCapabilityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEksCapabilityTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCapability.DataAwsccEksCapabilityTags">DataAwsccEksCapabilityTags</a>

---



