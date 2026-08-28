# `dataAwsccEc2NetworkInterfaceAttachment` Submodule <a name="`dataAwsccEc2NetworkInterfaceAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInterfaceAttachment <a name="DataAwsccEc2NetworkInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachment;

DataAwsccEc2NetworkInterfaceAttachment.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface_attachment#id DataAwsccEc2NetworkInterfaceAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachment;

DataAwsccEc2NetworkInterfaceAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachment;

DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachment;

DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachment;

DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEc2NetworkInterfaceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEc2NetworkInterfaceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInterfaceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deleteOnTermination">deleteOnTermination</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaQueueCount">enaQueueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deleteOnTermination"></a>

```java
public IResolvable getDeleteOnTermination();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.deviceIndex"></a>

```java
public java.lang.String getDeviceIndex();
```

- *Type:* java.lang.String

---

##### `enaQueueCount`<sup>Required</sup> <a name="enaQueueCount" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaQueueCount"></a>

```java
public java.lang.Number getEnaQueueCount();
```

- *Type:* java.lang.Number

---

##### `enaSrdSpecification`<sup>Required</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.enaSrdSpecification"></a>

```java
public DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInterfaceAttachmentConfig <a name="DataAwsccEc2NetworkInterfaceAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachmentConfig;

DataAwsccEc2NetworkInterfaceAttachmentConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_interface_attachment#id DataAwsccEc2NetworkInterfaceAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification;

DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification.builder()
    .build();
```


### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification;

DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;

new DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpEnabled`<sup>Required</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```java
public IResolvable getEnaSrdUdpEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference <a name="DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_network_interface_attachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference;

new DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdEnabled`<sup>Required</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```java
public IResolvable getEnaSrdEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpSpecification`<sup>Required</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```java
public DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInterfaceAttachment.DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification">DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---



