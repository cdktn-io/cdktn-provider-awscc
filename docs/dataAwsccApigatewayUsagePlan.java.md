# `dataAwsccApigatewayUsagePlan` Submodule <a name="`dataAwsccApigatewayUsagePlan` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayUsagePlan <a name="DataAwsccApigatewayUsagePlan" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_usage_plan awscc_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlan;

DataAwsccApigatewayUsagePlan.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_usage_plan#id DataAwsccApigatewayUsagePlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayUsagePlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlan;

DataAwsccApigatewayUsagePlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlan;

DataAwsccApigatewayUsagePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlan;

DataAwsccApigatewayUsagePlan.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlan;

DataAwsccApigatewayUsagePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccApigatewayUsagePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccApigatewayUsagePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccApigatewayUsagePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.apiStages">apiStages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList">DataAwsccApigatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference">DataAwsccApigatewayUsagePlanQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList">DataAwsccApigatewayUsagePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference">DataAwsccApigatewayUsagePlanThrottleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.usagePlanId">usagePlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.usagePlanName">usagePlanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `apiStages`<sup>Required</sup> <a name="apiStages" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.apiStages"></a>

```java
public DataAwsccApigatewayUsagePlanApiStagesList getApiStages();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList">DataAwsccApigatewayUsagePlanApiStagesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.quota"></a>

```java
public DataAwsccApigatewayUsagePlanQuotaOutputReference getQuota();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference">DataAwsccApigatewayUsagePlanQuotaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.tags"></a>

```java
public DataAwsccApigatewayUsagePlanTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList">DataAwsccApigatewayUsagePlanTagsList</a>

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.throttle"></a>

```java
public DataAwsccApigatewayUsagePlanThrottleOutputReference getThrottle();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference">DataAwsccApigatewayUsagePlanThrottleOutputReference</a>

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.usagePlanId"></a>

```java
public java.lang.String getUsagePlanId();
```

- *Type:* java.lang.String

---

##### `usagePlanName`<sup>Required</sup> <a name="usagePlanName" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.usagePlanName"></a>

```java
public java.lang.String getUsagePlanName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayUsagePlanApiStages <a name="DataAwsccApigatewayUsagePlanApiStages" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStages.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanApiStages;

DataAwsccApigatewayUsagePlanApiStages.builder()
    .build();
```


### DataAwsccApigatewayUsagePlanApiStagesThrottle <a name="DataAwsccApigatewayUsagePlanApiStagesThrottle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottle.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanApiStagesThrottle;

DataAwsccApigatewayUsagePlanApiStagesThrottle.builder()
    .build();
```


### DataAwsccApigatewayUsagePlanConfig <a name="DataAwsccApigatewayUsagePlanConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanConfig;

DataAwsccApigatewayUsagePlanConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_usage_plan#id DataAwsccApigatewayUsagePlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayUsagePlanQuota <a name="DataAwsccApigatewayUsagePlanQuota" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuota"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuota.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanQuota;

DataAwsccApigatewayUsagePlanQuota.builder()
    .build();
```


### DataAwsccApigatewayUsagePlanTags <a name="DataAwsccApigatewayUsagePlanTags" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanTags;

DataAwsccApigatewayUsagePlanTags.builder()
    .build();
```


### DataAwsccApigatewayUsagePlanThrottle <a name="DataAwsccApigatewayUsagePlanThrottle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottle.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanThrottle;

DataAwsccApigatewayUsagePlanThrottle.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayUsagePlanApiStagesList <a name="DataAwsccApigatewayUsagePlanApiStagesList" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanApiStagesList;

new DataAwsccApigatewayUsagePlanApiStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.get"></a>

```java
public DataAwsccApigatewayUsagePlanApiStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApigatewayUsagePlanApiStagesOutputReference <a name="DataAwsccApigatewayUsagePlanApiStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanApiStagesOutputReference;

new DataAwsccApigatewayUsagePlanApiStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap">DataAwsccApigatewayUsagePlanApiStagesThrottleMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStages">DataAwsccApigatewayUsagePlanApiStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```java
public DataAwsccApigatewayUsagePlanApiStagesThrottleMap getThrottle();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap">DataAwsccApigatewayUsagePlanApiStagesThrottleMap</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```java
public DataAwsccApigatewayUsagePlanApiStages getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStages">DataAwsccApigatewayUsagePlanApiStages</a>

---


### DataAwsccApigatewayUsagePlanApiStagesThrottleMap <a name="DataAwsccApigatewayUsagePlanApiStagesThrottleMap" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap;

new DataAwsccApigatewayUsagePlanApiStagesThrottleMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.get"></a>

```java
public DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference <a name="DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference;

new DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottle">DataAwsccApigatewayUsagePlanApiStagesThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```java
public DataAwsccApigatewayUsagePlanApiStagesThrottle getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanApiStagesThrottle">DataAwsccApigatewayUsagePlanApiStagesThrottle</a>

---


### DataAwsccApigatewayUsagePlanQuotaOutputReference <a name="DataAwsccApigatewayUsagePlanQuotaOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanQuotaOutputReference;

new DataAwsccApigatewayUsagePlanQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuota">DataAwsccApigatewayUsagePlanQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuotaOutputReference.property.internalValue"></a>

```java
public DataAwsccApigatewayUsagePlanQuota getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanQuota">DataAwsccApigatewayUsagePlanQuota</a>

---


### DataAwsccApigatewayUsagePlanTagsList <a name="DataAwsccApigatewayUsagePlanTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanTagsList;

new DataAwsccApigatewayUsagePlanTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.get"></a>

```java
public DataAwsccApigatewayUsagePlanTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccApigatewayUsagePlanTagsOutputReference <a name="DataAwsccApigatewayUsagePlanTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanTagsOutputReference;

new DataAwsccApigatewayUsagePlanTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTags">DataAwsccApigatewayUsagePlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccApigatewayUsagePlanTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanTags">DataAwsccApigatewayUsagePlanTags</a>

---


### DataAwsccApigatewayUsagePlanThrottleOutputReference <a name="DataAwsccApigatewayUsagePlanThrottleOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_apigateway_usage_plan.DataAwsccApigatewayUsagePlanThrottleOutputReference;

new DataAwsccApigatewayUsagePlanThrottleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottle">DataAwsccApigatewayUsagePlanThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottleOutputReference.property.internalValue"></a>

```java
public DataAwsccApigatewayUsagePlanThrottle getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayUsagePlan.DataAwsccApigatewayUsagePlanThrottle">DataAwsccApigatewayUsagePlanThrottle</a>

---



