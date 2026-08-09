# `dataAwsccCloudfrontVpcOrigin` Submodule <a name="`dataAwsccCloudfrontVpcOrigin` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontVpcOrigin <a name="DataAwsccCloudfrontVpcOrigin" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin awscc_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOrigin;

DataAwsccCloudfrontVpcOrigin.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin#id DataAwsccCloudfrontVpcOrigin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOrigin;

DataAwsccCloudfrontVpcOrigin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOrigin;

DataAwsccCloudfrontVpcOrigin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOrigin;

DataAwsccCloudfrontVpcOrigin.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOrigin;

DataAwsccCloudfrontVpcOrigin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccCloudfrontVpcOrigin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccCloudfrontVpcOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccCloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList">DataAwsccCloudfrontVpcOriginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginEndpointConfig">vpcOriginEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginId">vpcOriginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tags"></a>

```java
public DataAwsccCloudfrontVpcOriginTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList">DataAwsccCloudfrontVpcOriginTagsList</a>

---

##### `vpcOriginEndpointConfig`<sup>Required</sup> <a name="vpcOriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```java
public DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference getVpcOriginEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a>

---

##### `vpcOriginId`<sup>Required</sup> <a name="vpcOriginId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginId"></a>

```java
public java.lang.String getVpcOriginId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontVpcOriginConfig <a name="DataAwsccCloudfrontVpcOriginConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOriginConfig;

DataAwsccCloudfrontVpcOriginConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_vpc_origin#id DataAwsccCloudfrontVpcOrigin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontVpcOriginTags <a name="DataAwsccCloudfrontVpcOriginTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOriginTags;

DataAwsccCloudfrontVpcOriginTags.builder()
    .build();
```


### DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig <a name="DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig;

DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontVpcOriginTagsList <a name="DataAwsccCloudfrontVpcOriginTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOriginTagsList;

new DataAwsccCloudfrontVpcOriginTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get"></a>

```java
public DataAwsccCloudfrontVpcOriginTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccCloudfrontVpcOriginTagsOutputReference <a name="DataAwsccCloudfrontVpcOriginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOriginTagsOutputReference;

new DataAwsccCloudfrontVpcOriginTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags">DataAwsccCloudfrontVpcOriginTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudfrontVpcOriginTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags">DataAwsccCloudfrontVpcOriginTags</a>

---


### DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_cloudfront_vpc_origin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference;

new DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">originProtocolPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">originSslProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `originProtocolPolicy`<sup>Required</sup> <a name="originProtocolPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```java
public java.lang.String getOriginProtocolPolicy();
```

- *Type:* java.lang.String

---

##### `originSslProtocols`<sup>Required</sup> <a name="originSslProtocols" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```java
public java.util.List<java.lang.String> getOriginSslProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig</a>

---



