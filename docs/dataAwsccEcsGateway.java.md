# `dataAwsccEcsGateway` Submodule <a name="`dataAwsccEcsGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsGateway <a name="DataAwsccEcsGateway" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway awscc_ecs_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGateway;

DataAwsccEcsGateway.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#id DataAwsccEcsGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGateway;

DataAwsccEcsGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGateway;

DataAwsccEcsGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGateway;

DataAwsccEcsGateway.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGateway;

DataAwsccEcsGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEcsGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEcsGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEcsGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEcsGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference">DataAwsccEcsGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.deletionProtection">deletionProtection</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList">DataAwsccEcsGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.configuration"></a>

```java
public DataAwsccEcsGatewayConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference">DataAwsccEcsGatewayConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tags"></a>

```java
public DataAwsccEcsGatewayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList">DataAwsccEcsGatewayTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsGatewayConfig <a name="DataAwsccEcsGatewayConfig" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfig;

DataAwsccEcsGatewayConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#id DataAwsccEcsGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsGatewayConfiguration <a name="DataAwsccEcsGatewayConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfiguration;

DataAwsccEcsGatewayConfiguration.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlb <a name="DataAwsccEcsGatewayConfigurationHostSharedAlb" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlb;

DataAwsccEcsGatewayConfigurationHostSharedAlb.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs;

DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination;

DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3;

DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration;

DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules;

DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules.builder()
    .build();
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader;

DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.builder()
    .build();
```


### DataAwsccEcsGatewayTags <a name="DataAwsccEcsGatewayTags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayTags;

DataAwsccEcsGatewayTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup">inboundSecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inboundSecurityGroup`<sup>Required</sup> <a name="inboundSecurityGroup" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup"></a>

```java
public java.lang.String getInboundSecurityGroup();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount">currentAlbCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync">httpDesync</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount">maxAlbCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules">testTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn">webAclArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb">DataAwsccEcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLogs`<sup>Required</sup> <a name="accessLogs" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference getAccessLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a>

---

##### `currentAlbCount`<sup>Required</sup> <a name="currentAlbCount" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount"></a>

```java
public java.lang.Number getCurrentAlbCount();
```

- *Type:* java.lang.Number

---

##### `httpDesync`<sup>Required</sup> <a name="httpDesync" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync"></a>

```java
public java.lang.String getHttpDesync();
```

- *Type:* java.lang.String

---

##### `maxAlbCount`<sup>Required</sup> <a name="maxAlbCount" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount"></a>

```java
public java.lang.Number getMaxAlbCount();
```

- *Type:* java.lang.Number

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `testTrafficRules`<sup>Required</sup> <a name="testTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference getTestTrafficRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a>

---

##### `webAclArn`<sup>Required</sup> <a name="webAclArn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn"></a>

```java
public java.lang.String getWebAclArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlb getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb">DataAwsccEcsGatewayConfigurationHostSharedAlb</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference;

new DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---


### DataAwsccEcsGatewayConfigurationOutputReference <a name="DataAwsccEcsGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayConfigurationOutputReference;

new DataAwsccEcsGatewayConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.hostSharedAlb">hostSharedAlb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration">DataAwsccEcsGatewayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostSharedAlb`<sup>Required</sup> <a name="hostSharedAlb" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.hostSharedAlb"></a>

```java
public DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference getHostSharedAlb();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration">DataAwsccEcsGatewayConfiguration</a>

---


### DataAwsccEcsGatewayTagsList <a name="DataAwsccEcsGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayTagsList;

new DataAwsccEcsGatewayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get"></a>

```java
public DataAwsccEcsGatewayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEcsGatewayTagsOutputReference <a name="DataAwsccEcsGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ecs_gateway.DataAwsccEcsGatewayTagsOutputReference;

new DataAwsccEcsGatewayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags">DataAwsccEcsGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEcsGatewayTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags">DataAwsccEcsGatewayTags</a>

---



