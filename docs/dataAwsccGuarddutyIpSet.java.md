# `dataAwsccGuarddutyIpSet` Submodule <a name="`dataAwsccGuarddutyIpSet` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyIpSet <a name="DataAwsccGuarddutyIpSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_ip_set awscc_guardduty_ip_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSet;

DataAwsccGuarddutyIpSet.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_ip_set#id DataAwsccGuarddutyIpSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyIpSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSet;

DataAwsccGuarddutyIpSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSet;

DataAwsccGuarddutyIpSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSet;

DataAwsccGuarddutyIpSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSet;

DataAwsccGuarddutyIpSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccGuarddutyIpSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccGuarddutyIpSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccGuarddutyIpSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccGuarddutyIpSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_ip_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyIpSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.activate">activate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.ipSetId">ipSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList">DataAwsccGuarddutyIpSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.activate"></a>

```java
public IResolvable getActivate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `ipSetId`<sup>Required</sup> <a name="ipSetId" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.ipSetId"></a>

```java
public java.lang.String getIpSetId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.tags"></a>

```java
public DataAwsccGuarddutyIpSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList">DataAwsccGuarddutyIpSetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyIpSetConfig <a name="DataAwsccGuarddutyIpSetConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSetConfig;

DataAwsccGuarddutyIpSetConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_ip_set#id DataAwsccGuarddutyIpSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyIpSetTags <a name="DataAwsccGuarddutyIpSetTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSetTags;

DataAwsccGuarddutyIpSetTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyIpSetTagsList <a name="DataAwsccGuarddutyIpSetTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSetTagsList;

new DataAwsccGuarddutyIpSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.get"></a>

```java
public DataAwsccGuarddutyIpSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccGuarddutyIpSetTagsOutputReference <a name="DataAwsccGuarddutyIpSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_guardduty_ip_set.DataAwsccGuarddutyIpSetTagsOutputReference;

new DataAwsccGuarddutyIpSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTags">DataAwsccGuarddutyIpSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccGuarddutyIpSetTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyIpSet.DataAwsccGuarddutyIpSetTags">DataAwsccGuarddutyIpSetTags</a>

---



