# `dataAwsccEc2VpcEndpoint` Submodule <a name="`dataAwsccEc2VpcEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpcEndpoint <a name="DataAwsccEc2VpcEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint awscc_ec2_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpoint;

DataAwsccEc2VpcEndpoint.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint#id DataAwsccEc2VpcEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpoint;

DataAwsccEc2VpcEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpoint;

DataAwsccEc2VpcEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpoint;

DataAwsccEc2VpcEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpoint;

DataAwsccEc2VpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEc2VpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEc2VpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEc2VpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEc2VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsEntries">dnsEntries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference">DataAwsccEc2VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.routeTableIds">routeTableIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceRegion">serviceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList">DataAwsccEc2VpcEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `dnsEntries`<sup>Required</sup> <a name="dnsEntries" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsEntries"></a>

```java
public java.util.List<java.lang.String> getDnsEntries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.dnsOptions"></a>

```java
public DataAwsccEc2VpcEndpointDnsOptionsOutputReference getDnsOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference">DataAwsccEc2VpcEndpointDnsOptionsOutputReference</a>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.privateDnsEnabled"></a>

```java
public IResolvable getPrivateDnsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.routeTableIds"></a>

```java
public java.util.List<java.lang.String> getRouteTableIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceNetworkArn"></a>

```java
public java.lang.String getServiceNetworkArn();
```

- *Type:* java.lang.String

---

##### `serviceRegion`<sup>Required</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.serviceRegion"></a>

```java
public java.lang.String getServiceRegion();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tags"></a>

```java
public DataAwsccEc2VpcEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList">DataAwsccEc2VpcEndpointTagsList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcEndpointType"></a>

```java
public java.lang.String getVpcEndpointType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpcEndpointConfig <a name="DataAwsccEc2VpcEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpointConfig;

DataAwsccEc2VpcEndpointConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_vpc_endpoint#id DataAwsccEc2VpcEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VpcEndpointDnsOptions <a name="DataAwsccEc2VpcEndpointDnsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpointDnsOptions;

DataAwsccEc2VpcEndpointDnsOptions.builder()
    .build();
```


### DataAwsccEc2VpcEndpointTags <a name="DataAwsccEc2VpcEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpointTags;

DataAwsccEc2VpcEndpointTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VpcEndpointDnsOptionsOutputReference <a name="DataAwsccEc2VpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference;

new DataAwsccEc2VpcEndpointDnsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions">DataAwsccEc2VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsRecordIpType`<sup>Required</sup> <a name="dnsRecordIpType" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```java
public java.lang.String getDnsRecordIpType();
```

- *Type:* java.lang.String

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```java
public java.lang.String getPrivateDnsOnlyForInboundResolverEndpoint();
```

- *Type:* java.lang.String

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```java
public java.lang.String getPrivateDnsPreference();
```

- *Type:* java.lang.String

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```java
public java.util.List<java.lang.String> getPrivateDnsSpecifiedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2VpcEndpointDnsOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointDnsOptions">DataAwsccEc2VpcEndpointDnsOptions</a>

---


### DataAwsccEc2VpcEndpointTagsList <a name="DataAwsccEc2VpcEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpointTagsList;

new DataAwsccEc2VpcEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.get"></a>

```java
public DataAwsccEc2VpcEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEc2VpcEndpointTagsOutputReference <a name="DataAwsccEc2VpcEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_vpc_endpoint.DataAwsccEc2VpcEndpointTagsOutputReference;

new DataAwsccEc2VpcEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags">DataAwsccEc2VpcEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2VpcEndpointTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcEndpoint.DataAwsccEc2VpcEndpointTags">DataAwsccEc2VpcEndpointTags</a>

---



