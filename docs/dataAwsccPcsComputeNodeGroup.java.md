# `dataAwsccPcsComputeNodeGroup` Submodule <a name="`dataAwsccPcsComputeNodeGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcsComputeNodeGroup <a name="DataAwsccPcsComputeNodeGroup" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group awscc_pcs_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroup;

DataAwsccPcsComputeNodeGroup.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group#id DataAwsccPcsComputeNodeGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroup;

DataAwsccPcsComputeNodeGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroup;

DataAwsccPcsComputeNodeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroup;

DataAwsccPcsComputeNodeGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroup;

DataAwsccPcsComputeNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccPcsComputeNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccPcsComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccPcsComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcsComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId">amiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId">computeNodeGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate">customLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs">instanceConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions">nodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption">purchaseOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration">slurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `amiId`<sup>Required</sup> <a name="amiId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId"></a>

```java
public java.lang.String getAmiId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `computeNodeGroupId`<sup>Required</sup> <a name="computeNodeGroupId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId"></a>

```java
public java.lang.String getComputeNodeGroupId();
```

- *Type:* java.lang.String

---

##### `customLaunchTemplate`<sup>Required</sup> <a name="customLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate"></a>

```java
public DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference getCustomLaunchTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a>

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo"></a>

```java
public DataAwsccPcsComputeNodeGroupErrorInfoList getErrorInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a>

---

##### `iamInstanceProfileArn`<sup>Required</sup> <a name="iamInstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn"></a>

```java
public java.lang.String getIamInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `instanceConfigs`<sup>Required</sup> <a name="instanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs"></a>

```java
public DataAwsccPcsComputeNodeGroupInstanceConfigsList getInstanceConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeLifecycleActions`<sup>Required</sup> <a name="nodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference getNodeLifecycleActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a>

---

##### `purchaseOption`<sup>Required</sup> <a name="purchaseOption" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption"></a>

```java
public java.lang.String getPurchaseOption();
```

- *Type:* java.lang.String

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration"></a>

```java
public DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference getScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a>

---

##### `slurmConfiguration`<sup>Required</sup> <a name="slurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration"></a>

```java
public DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference getSlurmConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a>

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions"></a>

```java
public DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference getSpotOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcsComputeNodeGroupConfig <a name="DataAwsccPcsComputeNodeGroupConfig" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupConfig;

DataAwsccPcsComputeNodeGroupConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group#id DataAwsccPcsComputeNodeGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplate <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate;

DataAwsccPcsComputeNodeGroupCustomLaunchTemplate.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupErrorInfo <a name="DataAwsccPcsComputeNodeGroupErrorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupErrorInfo;

DataAwsccPcsComputeNodeGroupErrorInfo.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupInstanceConfigs <a name="DataAwsccPcsComputeNodeGroupInstanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupInstanceConfigs;

DataAwsccPcsComputeNodeGroupInstanceConfigs.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActions <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActions;

DataAwsccPcsComputeNodeGroupNodeLifecycleActions.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages;

DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped;

DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource;

DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady;

DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource;

DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupScalingConfiguration <a name="DataAwsccPcsComputeNodeGroupScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupScalingConfiguration;

DataAwsccPcsComputeNodeGroupScalingConfiguration.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupSlurmConfiguration <a name="DataAwsccPcsComputeNodeGroupSlurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSlurmConfiguration;

DataAwsccPcsComputeNodeGroupSlurmConfiguration.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings;

DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.builder()
    .build();
```


### DataAwsccPcsComputeNodeGroupSpotOptions <a name="DataAwsccPcsComputeNodeGroupSpotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSpotOptions;

DataAwsccPcsComputeNodeGroupSpotOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference;

new DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupCustomLaunchTemplate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a>

---


### DataAwsccPcsComputeNodeGroupErrorInfoList <a name="DataAwsccPcsComputeNodeGroupErrorInfoList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupErrorInfoList;

new DataAwsccPcsComputeNodeGroupErrorInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get"></a>

```java
public DataAwsccPcsComputeNodeGroupErrorInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccPcsComputeNodeGroupErrorInfoOutputReference <a name="DataAwsccPcsComputeNodeGroupErrorInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference;

new DataAwsccPcsComputeNodeGroupErrorInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupErrorInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a>

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsList <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupInstanceConfigsList;

new DataAwsccPcsComputeNodeGroupInstanceConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get"></a>

```java
public DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference;

new DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupInstanceConfigs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy">scriptCachingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptCachingPolicy`<sup>Required</sup> <a name="scriptCachingPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy"></a>

```java
public java.lang.String getScriptCachingPolicy();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference getStages();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy">executionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError">onError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionPolicy`<sup>Required</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy"></a>

```java
public java.lang.String getExecutionPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onError`<sup>Required</sup> <a name="onError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError"></a>

```java
public java.lang.String getOnError();
```

- *Type:* java.lang.String

---

##### `scriptSource`<sup>Required</sup> <a name="scriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference getScriptSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum">checksum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId">s3VersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum"></a>

```java
public java.lang.String getChecksum();
```

- *Type:* java.lang.String

---

##### `s3VersionId`<sup>Required</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId"></a>

```java
public java.lang.String getS3VersionId();
```

- *Type:* java.lang.String

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation"></a>

```java
public java.lang.String getScriptLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy">executionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError">onError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionPolicy`<sup>Required</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy"></a>

```java
public java.lang.String getExecutionPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onError`<sup>Required</sup> <a name="onError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError"></a>

```java
public java.lang.String getOnError();
```

- *Type:* java.lang.String

---

##### `scriptSource`<sup>Required</sup> <a name="scriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference getScriptSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum">checksum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId">s3VersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum"></a>

```java
public java.lang.String getChecksum();
```

- *Type:* java.lang.String

---

##### `s3VersionId`<sup>Required</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId"></a>

```java
public java.lang.String getS3VersionId();
```

- *Type:* java.lang.String

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation"></a>

```java
public java.lang.String getScriptLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped">nodeBootstrapped</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady">nodeReady</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeBootstrapped`<sup>Required</sup> <a name="nodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList getNodeBootstrapped();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a>

---

##### `nodeReady`<sup>Required</sup> <a name="nodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList getNodeReady();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a>

---


### DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference;

new DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">scaleDownIdleTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings">slurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="scaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```java
public java.lang.Number getScaleDownIdleTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `slurmCustomSettings`<sup>Required</sup> <a name="slurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```java
public DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList getSlurmCustomSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupSlurmConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get"></a>

```java
public DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>

---


### DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference <a name="DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_pcs_compute_node_group.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference;

new DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsccPcsComputeNodeGroupSpotOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a>

---



