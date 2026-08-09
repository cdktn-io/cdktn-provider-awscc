# `dataAwsccSecurityhubFindingAggregator` Submodule <a name="`dataAwsccSecurityhubFindingAggregator` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubFindingAggregator <a name="DataAwsccSecurityhubFindingAggregator" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_finding_aggregator awscc_securityhub_finding_aggregator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_securityhub_finding_aggregator.DataAwsccSecurityhubFindingAggregator;

DataAwsccSecurityhubFindingAggregator.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_finding_aggregator#id DataAwsccSecurityhubFindingAggregator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubFindingAggregator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_securityhub_finding_aggregator.DataAwsccSecurityhubFindingAggregator;

DataAwsccSecurityhubFindingAggregator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_securityhub_finding_aggregator.DataAwsccSecurityhubFindingAggregator;

DataAwsccSecurityhubFindingAggregator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_securityhub_finding_aggregator.DataAwsccSecurityhubFindingAggregator;

DataAwsccSecurityhubFindingAggregator.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_securityhub_finding_aggregator.DataAwsccSecurityhubFindingAggregator;

DataAwsccSecurityhubFindingAggregator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSecurityhubFindingAggregator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSecurityhubFindingAggregator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSecurityhubFindingAggregator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSecurityhubFindingAggregator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_finding_aggregator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubFindingAggregator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.findingAggregationRegion">findingAggregationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.findingAggregatorArn">findingAggregatorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.regionLinkingMode">regionLinkingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `findingAggregationRegion`<sup>Required</sup> <a name="findingAggregationRegion" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.findingAggregationRegion"></a>

```java
public java.lang.String getFindingAggregationRegion();
```

- *Type:* java.lang.String

---

##### `findingAggregatorArn`<sup>Required</sup> <a name="findingAggregatorArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.findingAggregatorArn"></a>

```java
public java.lang.String getFindingAggregatorArn();
```

- *Type:* java.lang.String

---

##### `regionLinkingMode`<sup>Required</sup> <a name="regionLinkingMode" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.regionLinkingMode"></a>

```java
public java.lang.String getRegionLinkingMode();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubFindingAggregatorConfig <a name="DataAwsccSecurityhubFindingAggregatorConfig" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_securityhub_finding_aggregator.DataAwsccSecurityhubFindingAggregatorConfig;

DataAwsccSecurityhubFindingAggregatorConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubFindingAggregator.DataAwsccSecurityhubFindingAggregatorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_finding_aggregator#id DataAwsccSecurityhubFindingAggregator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



