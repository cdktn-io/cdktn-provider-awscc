# `dataAwsccNetworkmanagerVpcAttachment` Submodule <a name="`dataAwsccNetworkmanagerVpcAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerVpcAttachment <a name="DataAwsccNetworkmanagerVpcAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_vpc_attachment awscc_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachment;

DataAwsccNetworkmanagerVpcAttachment.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_vpc_attachment#id DataAwsccNetworkmanagerVpcAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachment;

DataAwsccNetworkmanagerVpcAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachment;

DataAwsccNetworkmanagerVpcAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachment;

DataAwsccNetworkmanagerVpcAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachment;

DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccNetworkmanagerVpcAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccNetworkmanagerVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.attachmentType">attachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.edgeLocation">edgeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference">DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.subnetArns">subnetArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList">DataAwsccNetworkmanagerVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.vpcArn">vpcArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.attachmentType"></a>

```java
public java.lang.String getAttachmentType();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.edgeLocation"></a>

```java
public java.lang.String getEdgeLocation();
```

- *Type:* java.lang.String

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.lastModificationErrors"></a>

```java
public java.util.List<java.lang.String> getLastModificationErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.options"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference">DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference getProposedNetworkFunctionGroupChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.proposedSegmentChange"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference getProposedSegmentChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.subnetArns"></a>

```java
public java.util.List<java.lang.String> getSubnetArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.tags"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList">DataAwsccNetworkmanagerVpcAttachmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.vpcArn"></a>

```java
public java.lang.String getVpcArn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerVpcAttachmentConfig <a name="DataAwsccNetworkmanagerVpcAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentConfig;

DataAwsccNetworkmanagerVpcAttachmentConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_vpc_attachment#id DataAwsccNetworkmanagerVpcAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerVpcAttachmentOptions <a name="DataAwsccNetworkmanagerVpcAttachmentOptions" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentOptions;

DataAwsccNetworkmanagerVpcAttachmentOptions.builder()
    .build();
```


### DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange;

DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.builder()
    .build();
```


### DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags;

DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.builder()
    .build();
```


### DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange;

DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange.builder()
    .build();
```


### DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags;

DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags.builder()
    .build();
```


### DataAwsccNetworkmanagerVpcAttachmentTags <a name="DataAwsccNetworkmanagerVpcAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentTags;

DataAwsccNetworkmanagerVpcAttachmentTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference <a name="DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference;

new DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">applianceModeSupport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport">dnsSupport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">ipv6Support</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptions">DataAwsccNetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```java
public IResolvable getApplianceModeSupport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```java
public IResolvable getDnsSupport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```java
public IResolvable getIpv6Support();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `securityGroupReferencingSupport`<sup>Required</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```java
public IResolvable getSecurityGroupReferencingSupport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentOptions">DataAwsccNetworkmanagerVpcAttachmentOptions</a>

---


### DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference;

new DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList;

new DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference;

new DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference;

new DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList;

new DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference;

new DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerVpcAttachmentTagsList <a name="DataAwsccNetworkmanagerVpcAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentTagsList;

new DataAwsccNetworkmanagerVpcAttachmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.get"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_networkmanager_vpc_attachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference;

new DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTags">DataAwsccNetworkmanagerVpcAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccNetworkmanagerVpcAttachmentTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerVpcAttachment.DataAwsccNetworkmanagerVpcAttachmentTags">DataAwsccNetworkmanagerVpcAttachmentTags</a>

---



