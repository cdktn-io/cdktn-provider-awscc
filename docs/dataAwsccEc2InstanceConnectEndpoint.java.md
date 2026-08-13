# `dataAwsccEc2InstanceConnectEndpoint` Submodule <a name="`dataAwsccEc2InstanceConnectEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2InstanceConnectEndpoint <a name="DataAwsccEc2InstanceConnectEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint awscc_ec2_instance_connect_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpoint;

DataAwsccEc2InstanceConnectEndpoint.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint#id DataAwsccEc2InstanceConnectEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpoint;

DataAwsccEc2InstanceConnectEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpoint;

DataAwsccEc2InstanceConnectEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpoint;

DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpoint;

DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccEc2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccEc2InstanceConnectEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccEc2InstanceConnectEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2InstanceConnectEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointArn">instanceConnectEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointId">instanceConnectEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.preserveClientIp">preserveClientIp</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.publicDnsNames">publicDnsNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList">DataAwsccEc2InstanceConnectEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `instanceConnectEndpointArn`<sup>Required</sup> <a name="instanceConnectEndpointArn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointArn"></a>

```java
public java.lang.String getInstanceConnectEndpointArn();
```

- *Type:* java.lang.String

---

##### `instanceConnectEndpointId`<sup>Required</sup> <a name="instanceConnectEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointId"></a>

```java
public java.lang.String getInstanceConnectEndpointId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.preserveClientIp"></a>

```java
public IResolvable getPreserveClientIp();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `publicDnsNames`<sup>Required</sup> <a name="publicDnsNames" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.publicDnsNames"></a>

```java
public DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference getPublicDnsNames();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference</a>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tags"></a>

```java
public DataAwsccEc2InstanceConnectEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList">DataAwsccEc2InstanceConnectEndpointTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2InstanceConnectEndpointConfig <a name="DataAwsccEc2InstanceConnectEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointConfig;

DataAwsccEc2InstanceConnectEndpointConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint#id DataAwsccEc2InstanceConnectEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2InstanceConnectEndpointPublicDnsNames <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNames" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames;

DataAwsccEc2InstanceConnectEndpointPublicDnsNames.builder()
    .build();
```


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack;

DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack.builder()
    .build();
```


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4 <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4;

DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4.builder()
    .build();
```


### DataAwsccEc2InstanceConnectEndpointTags <a name="DataAwsccEc2InstanceConnectEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointTags;

DataAwsccEc2InstanceConnectEndpointTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference;

new DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName">fipsDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `fipsDnsName`<sup>Required</sup> <a name="fipsDnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName"></a>

```java
public java.lang.String getFipsDnsName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack</a>

---


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference;

new DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName">fipsDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `fipsDnsName`<sup>Required</sup> <a name="fipsDnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName"></a>

```java
public java.lang.String getFipsDnsName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue"></a>

```java
public DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4</a>

---


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference;

new DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack">dualstack</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames">DataAwsccEc2InstanceConnectEndpointPublicDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dualstack`<sup>Required</sup> <a name="dualstack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack"></a>

```java
public DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference getDualstack();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4"></a>

```java
public DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference getIpv4();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2InstanceConnectEndpointPublicDnsNames getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames">DataAwsccEc2InstanceConnectEndpointPublicDnsNames</a>

---


### DataAwsccEc2InstanceConnectEndpointTagsList <a name="DataAwsccEc2InstanceConnectEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointTagsList;

new DataAwsccEc2InstanceConnectEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get"></a>

```java
public DataAwsccEc2InstanceConnectEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccEc2InstanceConnectEndpointTagsOutputReference <a name="DataAwsccEc2InstanceConnectEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ec2_instance_connect_endpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference;

new DataAwsccEc2InstanceConnectEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags">DataAwsccEc2InstanceConnectEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccEc2InstanceConnectEndpointTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags">DataAwsccEc2InstanceConnectEndpointTags</a>

---



