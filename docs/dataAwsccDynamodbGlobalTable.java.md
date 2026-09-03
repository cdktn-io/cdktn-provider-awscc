# `dataAwsccDynamodbGlobalTable` Submodule <a name="`dataAwsccDynamodbGlobalTable` Submodule" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDynamodbGlobalTable <a name="DataAwsccDynamodbGlobalTable" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table awscc_dynamodb_global_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTable;

DataAwsccDynamodbGlobalTable.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table#id DataAwsccDynamodbGlobalTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTable;

DataAwsccDynamodbGlobalTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTable;

DataAwsccDynamodbGlobalTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTable;

DataAwsccDynamodbGlobalTable.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTable;

DataAwsccDynamodbGlobalTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccDynamodbGlobalTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccDynamodbGlobalTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccDynamodbGlobalTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDynamodbGlobalTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.attributeDefinitions">attributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList">DataAwsccDynamodbGlobalTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableSourceArn">globalTableSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableWitnesses">globalTableWitnesses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList">DataAwsccDynamodbGlobalTableGlobalTableWitnessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList">DataAwsccDynamodbGlobalTableKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.multiRegionConsistency">multiRegionConsistency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readOnDemandThroughputSettings">readOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readProvisionedThroughputSettings">readProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList">DataAwsccDynamodbGlobalTableReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamSpecification">streamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.timeToLiveSpecification">timeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeOnDemandThroughputSettings">writeOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeProvisionedThroughputSettings">writeProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attributeDefinitions`<sup>Required</sup> <a name="attributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.attributeDefinitions"></a>

```java
public DataAwsccDynamodbGlobalTableAttributeDefinitionsList getAttributeDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList">DataAwsccDynamodbGlobalTableAttributeDefinitionsList</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalSecondaryIndexes"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList getGlobalSecondaryIndexes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList</a>

---

##### `globalTableSourceArn`<sup>Required</sup> <a name="globalTableSourceArn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableSourceArn"></a>

```java
public java.lang.String getGlobalTableSourceArn();
```

- *Type:* java.lang.String

---

##### `globalTableWitnesses`<sup>Required</sup> <a name="globalTableWitnesses" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableWitnesses"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalTableWitnessesList getGlobalTableWitnesses();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList">DataAwsccDynamodbGlobalTableGlobalTableWitnessesList</a>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.keySchema"></a>

```java
public DataAwsccDynamodbGlobalTableKeySchemaList getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList">DataAwsccDynamodbGlobalTableKeySchemaList</a>

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="localSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.localSecondaryIndexes"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList getLocalSecondaryIndexes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList</a>

---

##### `multiRegionConsistency`<sup>Required</sup> <a name="multiRegionConsistency" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.multiRegionConsistency"></a>

```java
public java.lang.String getMultiRegionConsistency();
```

- *Type:* java.lang.String

---

##### `readOnDemandThroughputSettings`<sup>Required</sup> <a name="readOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readOnDemandThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference getReadOnDemandThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference</a>

---

##### `readProvisionedThroughputSettings`<sup>Required</sup> <a name="readProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readProvisionedThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference getReadProvisionedThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.replicas"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasList getReplicas();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList">DataAwsccDynamodbGlobalTableReplicasList</a>

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.sseSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableSseSpecificationOutputReference getSseSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableSseSpecificationOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `streamSpecification`<sup>Required</sup> <a name="streamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference getStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference</a>

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `timeToLiveSpecification`<sup>Required</sup> <a name="timeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.timeToLiveSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference getTimeToLiveSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.warmThroughput"></a>

```java
public DataAwsccDynamodbGlobalTableWarmThroughputOutputReference getWarmThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableWarmThroughputOutputReference</a>

---

##### `writeOnDemandThroughputSettings`<sup>Required</sup> <a name="writeOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeOnDemandThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference getWriteOnDemandThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference</a>

---

##### `writeProvisionedThroughputSettings`<sup>Required</sup> <a name="writeProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeProvisionedThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference getWriteProvisionedThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDynamodbGlobalTableAttributeDefinitions <a name="DataAwsccDynamodbGlobalTableAttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableAttributeDefinitions;

DataAwsccDynamodbGlobalTableAttributeDefinitions.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableConfig <a name="DataAwsccDynamodbGlobalTableConfig" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableConfig;

DataAwsccDynamodbGlobalTableConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table#id DataAwsccDynamodbGlobalTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;

DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableGlobalTableWitnesses <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnesses" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalTableWitnesses;

DataAwsccDynamodbGlobalTableGlobalTableWitnesses.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableKeySchema <a name="DataAwsccDynamodbGlobalTableKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableKeySchema;

DataAwsccDynamodbGlobalTableKeySchema.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes;

DataAwsccDynamodbGlobalTableLocalSecondaryIndexes.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema;

DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection;

DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings;

DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings;

DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicas <a name="DataAwsccDynamodbGlobalTableReplicas" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicas;

DataAwsccDynamodbGlobalTableReplicas.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification <a name="DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification;

DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes;

DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification;

DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings;

DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings;

DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;

DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;

DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification <a name="DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification;

DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification <a name="DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification;

DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings;

DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings;

DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings;

DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;

DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification;

DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy;

DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags;

DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasResourcePolicy <a name="DataAwsccDynamodbGlobalTableReplicasResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasResourcePolicy;

DataAwsccDynamodbGlobalTableReplicasResourcePolicy.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasSseSpecification <a name="DataAwsccDynamodbGlobalTableReplicasSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasSseSpecification;

DataAwsccDynamodbGlobalTableReplicasSseSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableReplicasTags <a name="DataAwsccDynamodbGlobalTableReplicasTags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasTags;

DataAwsccDynamodbGlobalTableReplicasTags.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableSseSpecification <a name="DataAwsccDynamodbGlobalTableSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableSseSpecification;

DataAwsccDynamodbGlobalTableSseSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableStreamSpecification <a name="DataAwsccDynamodbGlobalTableStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableStreamSpecification;

DataAwsccDynamodbGlobalTableStreamSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableTimeToLiveSpecification <a name="DataAwsccDynamodbGlobalTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableTimeToLiveSpecification;

DataAwsccDynamodbGlobalTableTimeToLiveSpecification.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableWarmThroughput <a name="DataAwsccDynamodbGlobalTableWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWarmThroughput;

DataAwsccDynamodbGlobalTableWarmThroughput.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings;

DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings;

DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings;

DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.builder()
    .build();
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration;

DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDynamodbGlobalTableAttributeDefinitionsList <a name="DataAwsccDynamodbGlobalTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableAttributeDefinitionsList;

new DataAwsccDynamodbGlobalTableAttributeDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get"></a>

```java
public DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference <a name="DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference;

new DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions">DataAwsccDynamodbGlobalTableAttributeDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableAttributeDefinitions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions">DataAwsccDynamodbGlobalTableAttributeDefinitions</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings">readOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings">readProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeOnDemandThroughputSettings">writeOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeProvisionedThroughputSettings">writeProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference getProjection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `readOnDemandThroughputSettings`<sup>Required</sup> <a name="readOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference getReadOnDemandThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a>

---

##### `readProvisionedThroughputSettings`<sup>Required</sup> <a name="readProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference getReadProvisionedThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference getWarmThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `writeOnDemandThroughputSettings`<sup>Required</sup> <a name="writeOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeOnDemandThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference getWriteOnDemandThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference</a>

---

##### `writeProvisionedThroughputSettings`<sup>Required</sup> <a name="writeProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeProvisionedThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference getWriteProvisionedThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```java
public java.lang.Number getReadUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```java
public java.lang.Number getWriteUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings">writeCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `writeCapacityAutoScalingSettings`<sup>Required</sup> <a name="writeCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference getWriteCapacityAutoScalingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `seedCapacity`<sup>Required</sup> <a name="seedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```java
public java.lang.Number getSeedCapacity();
```

- *Type:* java.lang.Number

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference getTargetTrackingScalingPolicyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference;

new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```java
public IResolvable getDisableScaleIn();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableGlobalTableWitnessesList <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnessesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList;

new DataAwsccDynamodbGlobalTableGlobalTableWitnessesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference;

new DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses">DataAwsccDynamodbGlobalTableGlobalTableWitnesses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableGlobalTableWitnesses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses">DataAwsccDynamodbGlobalTableGlobalTableWitnesses</a>

---


### DataAwsccDynamodbGlobalTableKeySchemaList <a name="DataAwsccDynamodbGlobalTableKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableKeySchemaList;

new DataAwsccDynamodbGlobalTableKeySchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get"></a>

```java
public DataAwsccDynamodbGlobalTableKeySchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableKeySchemaOutputReference;

new DataAwsccDynamodbGlobalTableKeySchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema">DataAwsccDynamodbGlobalTableKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableKeySchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema">DataAwsccDynamodbGlobalTableKeySchema</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList;

new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference;

new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList;

new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference;

new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes">DataAwsccDynamodbGlobalTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference getProjection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes">DataAwsccDynamodbGlobalTableLocalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference;

new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings">readOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings">readProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contributorInsightsSpecification`<sup>Required</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference getContributorInsightsSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `readOnDemandThroughputSettings`<sup>Required</sup> <a name="readOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference getReadOnDemandThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a>

---

##### `readProvisionedThroughputSettings`<sup>Required</sup> <a name="readProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference getReadProvisionedThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings">readCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityAutoScalingSettings`<sup>Required</sup> <a name="readCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference getReadCapacityAutoScalingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a>

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `seedCapacity`<sup>Required</sup> <a name="seedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```java
public java.lang.Number getSeedCapacity();
```

- *Type:* java.lang.Number

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference getTargetTrackingScalingPolicyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```java
public IResolvable getDisableScaleIn();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">approximateCreationDateTimePrecision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approximateCreationDateTimePrecision`<sup>Required</sup> <a name="approximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```java
public java.lang.String getApproximateCreationDateTimePrecision();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasList <a name="DataAwsccDynamodbGlobalTableReplicasList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasList;

new DataAwsccDynamodbGlobalTableReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableReplicasOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasOutputReference;

new DataAwsccDynamodbGlobalTableReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalTableSettingsReplicationMode">globalTableSettingsReplicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.kinesisStreamSpecification">kinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readOnDemandThroughputSettings">readOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readProvisionedThroughputSettings">readProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.replicaStreamSpecification">replicaStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tableClass">tableClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList">DataAwsccDynamodbGlobalTableReplicasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas">DataAwsccDynamodbGlobalTableReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contributorInsightsSpecification`<sup>Required</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.contributorInsightsSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference getContributorInsightsSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.deletionProtectionEnabled"></a>

```java
public IResolvable getDeletionProtectionEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalSecondaryIndexes"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList getGlobalSecondaryIndexes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList</a>

---

##### `globalTableSettingsReplicationMode`<sup>Required</sup> <a name="globalTableSettingsReplicationMode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalTableSettingsReplicationMode"></a>

```java
public java.lang.String getGlobalTableSettingsReplicationMode();
```

- *Type:* java.lang.String

---

##### `kinesisStreamSpecification`<sup>Required</sup> <a name="kinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.kinesisStreamSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference getKinesisStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference</a>

---

##### `pointInTimeRecoverySpecification`<sup>Required</sup> <a name="pointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.pointInTimeRecoverySpecification"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference getPointInTimeRecoverySpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference</a>

---

##### `readOnDemandThroughputSettings`<sup>Required</sup> <a name="readOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readOnDemandThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference getReadOnDemandThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference</a>

---

##### `readProvisionedThroughputSettings`<sup>Required</sup> <a name="readProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readProvisionedThroughputSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference getReadProvisionedThroughputSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaStreamSpecification`<sup>Required</sup> <a name="replicaStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.replicaStreamSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference getReplicaStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference</a>

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.resourcePolicy"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference</a>

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.sseSpecification"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference getSseSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference</a>

---

##### `tableClass`<sup>Required</sup> <a name="tableClass" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tableClass"></a>

```java
public java.lang.String getTableClass();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tags"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList">DataAwsccDynamodbGlobalTableReplicasTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas">DataAwsccDynamodbGlobalTableReplicas</a>

---


### DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```java
public IResolvable getPointInTimeRecoveryEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `recoveryPeriodInDays`<sup>Required</sup> <a name="recoveryPeriodInDays" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```java
public java.lang.Number getRecoveryPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings">readCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityAutoScalingSettings`<sup>Required</sup> <a name="readCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference getReadCapacityAutoScalingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a>

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `seedCapacity`<sup>Required</sup> <a name="seedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```java
public java.lang.Number getSeedCapacity();
```

- *Type:* java.lang.Number

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference getTargetTrackingScalingPolicyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```java
public IResolvable getDisableScaleIn();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.resourcePolicy"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.tags"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList;

new DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags</a>

---


### DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference;

new DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy">DataAwsccDynamodbGlobalTableReplicasResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasResourcePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy">DataAwsccDynamodbGlobalTableReplicasResourcePolicy</a>

---


### DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification">DataAwsccDynamodbGlobalTableReplicasSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasSseSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification">DataAwsccDynamodbGlobalTableReplicasSseSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasTagsList <a name="DataAwsccDynamodbGlobalTableReplicasTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasTagsList;

new DataAwsccDynamodbGlobalTableReplicasTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDynamodbGlobalTableReplicasTagsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference;

new DataAwsccDynamodbGlobalTableReplicasTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags">DataAwsccDynamodbGlobalTableReplicasTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableReplicasTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags">DataAwsccDynamodbGlobalTableReplicasTags</a>

---


### DataAwsccDynamodbGlobalTableSseSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableSseSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseEnabled">sseEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseType">sseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification">DataAwsccDynamodbGlobalTableSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sseEnabled`<sup>Required</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseEnabled"></a>

```java
public IResolvable getSseEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sseType`<sup>Required</sup> <a name="sseType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseType"></a>

```java
public java.lang.String getSseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableSseSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification">DataAwsccDynamodbGlobalTableSseSpecification</a>

---


### DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification">DataAwsccDynamodbGlobalTableStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.streamViewType"></a>

```java
public java.lang.String getStreamViewType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableStreamSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification">DataAwsccDynamodbGlobalTableStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference;

new DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification">DataAwsccDynamodbGlobalTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableTimeToLiveSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification">DataAwsccDynamodbGlobalTableTimeToLiveSpecification</a>

---


### DataAwsccDynamodbGlobalTableWarmThroughputOutputReference <a name="DataAwsccDynamodbGlobalTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference;

new DataAwsccDynamodbGlobalTableWarmThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput">DataAwsccDynamodbGlobalTableWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```java
public java.lang.Number getReadUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```java
public java.lang.Number getWriteUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableWarmThroughput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput">DataAwsccDynamodbGlobalTableWarmThroughput</a>

---


### DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference;

new DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings">writeCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `writeCapacityAutoScalingSettings`<sup>Required</sup> <a name="writeCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings"></a>

```java
public DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference getWriteCapacityAutoScalingSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference;

new DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">targetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `seedCapacity`<sup>Required</sup> <a name="seedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```java
public java.lang.Number getSeedCapacity();
```

- *Type:* java.lang.Number

---

##### `targetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="targetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```java
public DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference getTargetTrackingScalingPolicyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_dynamodb_global_table.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference;

new DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```java
public IResolvable getDisableScaleIn();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```java
public java.lang.Number getScaleInCooldown();
```

- *Type:* java.lang.Number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```java
public java.lang.Number getScaleOutCooldown();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---



